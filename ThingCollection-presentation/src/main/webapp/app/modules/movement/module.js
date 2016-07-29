define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/movement/services/module');
  require('app/modules/movement/controllers/module');

  return require('angular')
    .module('app.movement', [
      'ui.router',
      'app.movement.controllers',
      'app.movement.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('movement.list', {
          url: '/list',
          templateUrl: 'app/modules/movement/views/list.html',
          controller: 'MovementListController'
        })
        .state('movement.insert', {
          url: '/insert',
          templateUrl: 'app/modules/movement/views/form.html',
          controller: 'MovementFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/movement/new');
            }]
          }
        })
        .state('movement.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/movement/views/form.html',
          controller: 'MovementFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/movement/' + $stateParams.id);
            }]
          }
        });
    })
});