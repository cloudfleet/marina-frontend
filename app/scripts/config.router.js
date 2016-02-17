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
          templateUrl: 'views/app.html'
        })
        .state('app.register', {
          url: '/register',
          templateUrl: 'views/app_register.html'
        })
        .state('app.dashboard', {
          url: '/dashboard',
          templateUrl: 'views/app_dashboard.html'
        })
        .state('app.repository', {
          url: '/repos/:owner/:name',
          templateUrl: 'views/app_repository.html'
        })
        .state('app.repository_build_logs', {
          url: '/repos/:owner/:name/builds/:build_id/logs',
          templateUrl: 'views/app_repository_build_logs.html'
        })
    }
  ]
);
