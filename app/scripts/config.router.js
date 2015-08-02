'use strict';

/**
 * @ngdoc run config
 * @name marinaFrontendApp.routeProvider
 * @description
 * route provider of the marinaFrontendApp
 */
angular.module('marinaFrontendApp')
  .run(
  ['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]
)
  .config(
  ['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/app/dashboard');
      $stateProvider
        .state('app', {
          abstract: true,
          url: '/app',
          templateUrl: 'views/app.html',
          data: {
            requireLogin: true
          }
        })
        .state('app.dashboard', {
          url: '/dashboard',
          templateUrl: 'views/app_dashboard.html'
        })
    }
  ]
);
