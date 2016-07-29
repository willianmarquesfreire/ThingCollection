define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/book/services/module');
  require('app/modules/book/controllers/module');

  return require('angular')
    .module('app.book', [
      'ui.router',
      'app.book.controllers',
      'app.book.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('book.list', {
          url: '/list',
          templateUrl: 'app/modules/book/views/list.html',
          controller: 'BookListController'
        })
        .state('book.insert', {
          url: '/insert',
          templateUrl: 'app/modules/book/views/form.html',
          controller: 'BookFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/book/new');
            }]
          }
        })
        .state('book.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/book/views/form.html',
          controller: 'BookFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/book/' + $stateParams.id);
            }]
          }
        });
    })
});