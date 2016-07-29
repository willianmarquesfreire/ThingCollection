define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/reservation/services/module');
  require('app/modules/reservation/controllers/module');

  return require('angular')
    .module('app.reservation', [
      'ui.router',
      'app.reservation.controllers',
      'app.reservation.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('reservation.list', {
          url: '/list',
          templateUrl: 'app/modules/reservation/views/list.html',
          controller: 'ReservationListController'
        })
        .state('reservation.insert', {
          url: '/insert',
          templateUrl: 'app/modules/reservation/views/form.html',
          controller: 'ReservationFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/reservation/new');
            }]
          }
        })
        .state('reservation.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/reservation/views/form.html',
          controller: 'ReservationFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/reservation/' + $stateParams.id);
            }]
          }
        });
    })
});