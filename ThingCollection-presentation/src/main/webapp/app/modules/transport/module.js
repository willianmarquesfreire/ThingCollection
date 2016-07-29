define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/transport/services/module');
  require('app/modules/transport/controllers/module');

  return require('angular')
    .module('app.transport', [
      'ui.router',
      'app.transport.controllers',
      'app.transport.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('transport.list', {
          url: '/list',
          templateUrl: 'app/modules/transport/views/list.html',
          controller: 'TransportListController'
        })
        .state('transport.insert', {
          url: '/insert',
          templateUrl: 'app/modules/transport/views/form.html',
          controller: 'TransportFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/transport/new');
            }]
          }
        })
        .state('transport.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/transport/views/form.html',
          controller: 'TransportFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/transport/' + $stateParams.id);
            }]
          }
        });
    })
});