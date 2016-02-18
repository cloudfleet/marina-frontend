'use strict';

/**
 * @ngdoc config
 * @name config.marinaFrontendApp
 * @description
 * config of the marinaFrontendApp
 */
angular.module('marinaFrontendApp')
    .run(
    ['$rootScope', '$auth', '$state',
        function ($rootScope, $auth, $state) {
          $rootScope.$on('auth:login-success', function(ev, user) {
              $state.go('app.dashboard');
          });

          $rootScope.$on('auth:login-error', function(ev, reason) {
              alert('auth failed because', reason.errors[0]);
          });

          $rootScope.$on('auth:logout-success', function(ev) {
              $state.go('index');
          });

          $rootScope.$on('auth:registration-email-success', function(ev, message) {
              alert("A registration email was sent to " + message.email);
              $state.go('index');
          });
          $rootScope.$on('auth:registration-email-error', function(ev, message) {
              alert("Registration failed: " + reason.errors[0]);
          });
        }
    ]);
