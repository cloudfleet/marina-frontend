'use strict';

/**
 * @ngdoc function
 * @name marinaFrontendApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the Auth functions
 */
angular.module('marinaFrontendApp')
  .controller('AuthCtrl',
  [ '$scope', '$auth',
    function ($scope, $auth) {
      $scope.submitRegistration = function(registrationForm){
        $auth.submitRegistration(registrationForm)
          .then(function(resp){
            alert("Registration successful!");
          })
          .catch(function(resp){
            alert(JSON.stringify(resp.data.errors.full_messages));
          });
      }
  }]);
