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
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('index', {
          url: '/',
          templateUrl: 'views/index.html'
        })
        .state('app', {
          abstract: true,
          url: '',
          templateUrl: 'views/app.html',
          resolve: {
            auth: function($auth) {
              return $auth.validateUser();
            }
          }
        })
        .state('app.dashboard', {
          url: '/dashboard',
          templateUrl: 'views/app_dashboard.html'
        })
        .state('app.profile', {
          url: '/profile/:id',
          templateUrl: 'views/app_profile.html',
          controller: 'ProfileCtrl',
          resolve: {
            profile_user: ['marinaApi', '$stateParams',
              function(marinaApi, $stateParams) {
                return marinaApi.User.get({id: $stateParams.id});
              }
            ]
          }
        })
        .state('app.repository', {
          url: '/repos/:owner/:name',
          templateUrl: 'views/app_repository.html',
          controller: 'RepositoryCtrl',
          resolve: {
            repository: ['marinaApi', '$stateParams',
              function(marinaApi, $stateParams) {
                return marinaApi.getRepository($stateParams.owner + '/' + $stateParams.name);
              }
            ]
          }
        })
        .state('app.repository_edit', {
          url: '/repos/:owner/:name/edit',
          templateUrl: 'views/app_repository_form.html',
          controller: 'RepositoryCtrl',
          resolve: {
            repository: ['marinaApi', '$stateParams',
              function(marinaApi, $stateParams) {
                return marinaApi.getRepository($stateParams.owner + '/' + $stateParams.name);
              }
            ]
          }
        })
        .state('app.repository_build_logs', {
          url: '/repos/:owner/:name/builds/:build_id/logs',
          templateUrl: 'views/app_repository_build_logs.html'
        })
        .state('auth', {
          abstract: true,
          url: '/auth',
          templateUrl: 'views/app.html'
        })
        .state('auth.register', {
          url: '/register',
          templateUrl: 'views/auth_register.html'
        })
        .state('auth.login', {
          url: '/login',
          templateUrl: 'views/auth_login.html'
        })


    }
  ]
);
