define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/acessory/services/module');
  require('app/modules/acessory/controllers/module');

  return require('angular')
    .module('app.acessory', [
      'ui.router',
      'app.acessory.controllers',
      'app.acessory.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('acessory.list', {
          url: '/list',
          templateUrl: 'app/modules/acessory/views/list.html',
          controller: 'AcessoryListController'
        })
        .state('acessory.insert', {
          url: '/insert',
          templateUrl: 'app/modules/acessory/views/form.html',
          controller: 'AcessoryFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/acessory/new');
            }]
          }
        })
        .state('acessory.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/acessory/views/form.html',
          controller: 'AcessoryFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/acessory/' + $stateParams.id);
            }]
          }
        });
    })
});