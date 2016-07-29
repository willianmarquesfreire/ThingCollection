define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/location/services/module');
  require('app/modules/location/controllers/module');

  return require('angular')
    .module('app.location', [
      'ui.router',
      'app.location.controllers',
      'app.location.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('location.list', {
          url: '/list',
          templateUrl: 'app/modules/location/views/list.html',
          controller: 'LocationListController'
        })
        .state('location.insert', {
          url: '/insert',
          templateUrl: 'app/modules/location/views/form.html',
          controller: 'LocationFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/location/new');
            }]
          }
        })
        .state('location.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/location/views/form.html',
          controller: 'LocationFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/location/' + $stateParams.id);
            }]
          }
        });
    })
});