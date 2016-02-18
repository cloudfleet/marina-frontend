'use strict';

/**
 * @ngdoc config
 * @name config.marinaFrontendApp
 * @description
 * config of the marinaFrontendApp
 */
angular.module('marinaFrontendApp')
    .run(
    ['$rootScope', '$auth', '$location',
        function ($rootScope, $auth, $location) {
          $rootScope.$on('auth:login-success', function(ev, user) {
              $rootScope.currentUser = user;
              $location.path('/dashboard');
          });

          $rootScope.$on('auth:login-error', function(ev, reason) {
              alert('auth failed because', reason.errors[0]);
          });

          $rootScope.$on('auth:logout-success', function(ev) {
              $location.path('/');
          });
        }
    ]);
