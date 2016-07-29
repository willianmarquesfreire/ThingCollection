define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/thing/services/module');
  require('app/modules/thing/controllers/module');

  return require('angular')
    .module('app.thing', [
      'ui.router',
      'app.thing.controllers',
      'app.thing.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('thing.list', {
          url: '/list',
          templateUrl: 'app/modules/thing/views/list.html',
          controller: 'ThingListController'
        })
        .state('thing.insert', {
          url: '/insert',
          templateUrl: 'app/modules/thing/views/form.html',
          controller: 'ThingFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/thing/new');
            }]
          }
        })
        .state('thing.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/thing/views/form.html',
          controller: 'ThingFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/thing/' + $stateParams.id);
            }]
          }
        });
    })
});