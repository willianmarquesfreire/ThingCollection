define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/subject/services/module');
  require('app/modules/subject/controllers/module');

  return require('angular')
    .module('app.subject', [
      'ui.router',
      'app.subject.controllers',
      'app.subject.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('subject.list', {
          url: '/list',
          templateUrl: 'app/modules/subject/views/list.html',
          controller: 'SubjectListController'
        })
        .state('subject.insert', {
          url: '/insert',
          templateUrl: 'app/modules/subject/views/form.html',
          controller: 'SubjectFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/subject/new');
            }]
          }
        })
        .state('subject.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/subject/views/form.html',
          controller: 'SubjectFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/subject/' + $stateParams.id);
            }]
          }
        });
    })
});