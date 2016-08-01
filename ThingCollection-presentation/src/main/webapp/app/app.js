define(function(require) {
  'use strict';
  require('angular');
  require('angular-ui-router');
  require('ngImgCrop');
  require('gumga-components');
  require('app/modules/login/module');
  require('app/apiLocations');
  require('app/modules/gumgatagdefinition/module');
  require('app/modules/gumgacustomfield/module');
    require('app/modules/thing/module');
    require('app/modules/location/module');
    require('app/modules/acessory/module');
    require('app/modules/book/module');
    require('app/modules/reservation/module');
    require('app/modules/people/module');
    require('app/modules/contact/module');
    require('app/modules/address/module');
    require('app/modules/movement/module');
    require('app/modules/author/module');
    require('app/modules/book/module');
    require('app/modules/publishinghouse/module');
    require('app/modules/transport/module');
  //FIMREQUIRE
  angular.module('app.core', [
    'ui.router'
    ,'gumga.core'
    ,'app.login'
    ,'app.gumgatagdefinition'
    ,'app.gumgacustomfield'
        ,'app.thing'
        ,'app.location'
        ,'app.acessory'
        ,'app.book'
        ,'app.reservation'
        ,'app.people'
        ,'app.contact'
        ,'app.address'
        ,'app.movement'
        ,'app.author'
        ,'app.book'
        ,'app.publishinghouse'
        ,'app.transport'
  //FIMINJECTIONS
    ])
    .config(function($stateProvider, $urlRouterProvider, $httpProvider, $injector, GumgaAlertProvider) {

    var template = [
        '<gumga-nav></gumga-nav>',
        '<gumga-menu menu-url="gumga-menu.json" keys-url="keys.json" image="./resources/images/gumga.png"></gumga-menu>',
        'oi<div class="gumga-container">',
        '<gumga-multi-entity-search data="multi.search"></gumga-multi-entity-search>',
        '</div>'
      ];

      $urlRouterProvider.otherwise('login/log');
      $stateProvider
        .state('login', {
          abstract: true,
          url: '/login',
          data: {
            id: 0
          },
          template: '<div ui-view style="height: 100%;"></div>'
        })
        .state('welcome', {
          url: '/welcome',
          data: {
            id: 0
          },
          templateUrl: 'app/modules/welcome/views/welcome.html'
        })
        .state('multientity', {
          url: '/multientity/:search',
          template: template.join('\n'),
          controller: 'MultiEntityController',
          controllerAs: 'multi',
          data: {
            id: 0
          },
          resolve: {
            SearchPromise: ['$stateParams', '$http', function($stateParams, $http) {
              var url = APILocations.apiLocation + '/public/multisearch/search/';
              return $http.get(url + $stateParams.search);
            }]
          }
        })
        .state('gumgatagdefinition', {
             url: '/gumgatagdefinition',
             templateUrl: 'app/modules/gumgatagdefinition/views/base.html'
        })
        .state('gumgacustomfield', {
             url: '/gumgacustomfield',
             templateUrl: 'app/modules/gumgacustomfield/views/base.html'
        })
        .state('thing', {
        data: {
            id: 1
        }, 
            url: '/thing',
            templateUrl: 'app/modules/thing/views/base.html'
        })

        .state('location', {
        data: {
            id: 1
        }, 
            url: '/location',
            templateUrl: 'app/modules/location/views/base.html'
        })

        .state('acessory', {
        data: {
            id: 1
        }, 
            url: '/acessory',
            templateUrl: 'app/modules/acessory/views/base.html'
        })

        .state('book', {
        data: {
            id: 1
        }, 
            url: '/book',
            templateUrl: 'app/modules/book/views/base.html'
        })

        .state('reservation', {
        data: {
            id: 1
        }, 
            url: '/reservation',
            templateUrl: 'app/modules/reservation/views/base.html'
        })

        .state('people', {
        data: {
            id: 1
        }, 
            url: '/people',
            templateUrl: 'app/modules/people/views/base.html'
        })

        .state('contact', {
        data: {
            id: 1
        }, 
            url: '/contact',
            templateUrl: 'app/modules/contact/views/base.html'
        })

        .state('address', {
        data: {
            id: 1
        }, 
            url: '/address',
            templateUrl: 'app/modules/address/views/base.html'
        })

        .state('movement', {
        data: {
            id: 1
        }, 
            url: '/movement',
            templateUrl: 'app/modules/movement/views/base.html'
        })

        .state('author', {
        data: {
            id: 1
        }, 
            url: '/author',
            templateUrl: 'app/modules/author/views/base.html'
        })

        .state('publishinghouse', {
        data: {
            id: 1
        }, 
            url: '/publishinghouse',
            templateUrl: 'app/modules/publishinghouse/views/base.html'
        })

        .state('transport', {
        data: {
            id: 1
        }, 
            url: '/transport',
            templateUrl: 'app/modules/transport/views/base.html'
        })

        //FIMROUTE


      $httpProvider.interceptors.push(function($q, $injector, $timeout) {

        return {
          'request': function(config) {
            config.headers['gumgaToken'] = window.sessionStorage.getItem('token') || 0;
            return config;
          },
          'responseError': function(rejection) {
            var $state = $injector.get('$state');
            GumgaAlertProvider.createDangerMessage(rejection.data.response, rejection.statusText);
            rejection.status == 403 && ($state.go('login.log'));
            return $q.reject(rejection);
          }
        };
      })
    })
});
