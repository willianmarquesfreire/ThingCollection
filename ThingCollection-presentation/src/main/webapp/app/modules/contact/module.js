define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/contact/services/module');
  require('app/modules/contact/controllers/module');

  return require('angular')
    .module('app.contact', [
      'ui.router',
      'app.contact.controllers',
      'app.contact.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('contact.list', {
          url: '/list',
          templateUrl: 'app/modules/contact/views/list.html',
          controller: 'ContactListController'
        })
        .state('contact.insert', {
          url: '/insert',
          templateUrl: 'app/modules/contact/views/form.html',
          controller: 'ContactFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/contact/new');
            }]
          }
        })
        .state('contact.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/contact/views/form.html',
          controller: 'ContactFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/contact/' + $stateParams.id);
            }]
          }
        });
    })
});