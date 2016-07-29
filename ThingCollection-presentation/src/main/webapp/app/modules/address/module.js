define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/address/services/module');
  require('app/modules/address/controllers/module');

  return require('angular')
    .module('app.address', [
      'ui.router',
      'app.address.controllers',
      'app.address.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('address.list', {
          url: '/list',
          templateUrl: 'app/modules/address/views/list.html',
          controller: 'AddressListController'
        })
        .state('address.insert', {
          url: '/insert',
          templateUrl: 'app/modules/address/views/form.html',
          controller: 'AddressFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/address/new');
            }]
          }
        })
        .state('address.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/address/views/form.html',
          controller: 'AddressFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/address/' + $stateParams.id);
            }]
          }
        });
    })
});