define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/people/services/module');
  require('app/modules/people/controllers/module');

  return require('angular')
    .module('app.people', [
      'ui.router',
      'app.people.controllers',
      'app.people.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('people.list', {
          url: '/list',
          templateUrl: 'app/modules/people/views/list.html',
          controller: 'PeopleListController'
        })
        .state('people.insert', {
          url: '/insert',
          templateUrl: 'app/modules/people/views/form.html',
          controller: 'PeopleFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/people/new');
            }]
          }
        })
        .state('people.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/people/views/form.html',
          controller: 'PeopleFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/people/' + $stateParams.id);
            }]
          }
        });
    })
});