define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/publishinghouse/services/module');
  require('app/modules/publishinghouse/controllers/module');

  return require('angular')
    .module('app.publishinghouse', [
      'ui.router',
      'app.publishinghouse.controllers',
      'app.publishinghouse.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('publishinghouse.list', {
          url: '/list',
          templateUrl: 'app/modules/publishinghouse/views/list.html',
          controller: 'PublishingHouseListController'
        })
        .state('publishinghouse.insert', {
          url: '/insert',
          templateUrl: 'app/modules/publishinghouse/views/form.html',
          controller: 'PublishingHouseFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/publishinghouse/new');
            }]
          }
        })
        .state('publishinghouse.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/publishinghouse/views/form.html',
          controller: 'PublishingHouseFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/publishinghouse/' + $stateParams.id);
            }]
          }
        });
    })
});