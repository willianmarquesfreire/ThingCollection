define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/author/services/module');
  require('app/modules/author/controllers/module');

  return require('angular')
    .module('app.author', [
      'ui.router',
      'app.author.controllers',
      'app.author.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('author.list', {
          url: '/list',
          templateUrl: 'app/modules/author/views/list.html',
          controller: 'AuthorListController'
        })
        .state('author.insert', {
          url: '/insert',
          templateUrl: 'app/modules/author/views/form.html',
          controller: 'AuthorFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/author/new');
            }]
          }
        })
        .state('author.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/author/views/form.html',
          controller: 'AuthorFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/author/' + $stateParams.id);
            }]
          }
        });
    })
});