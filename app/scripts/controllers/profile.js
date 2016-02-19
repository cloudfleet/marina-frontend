'use strict';

/**
 * @ngdoc function
 * @name marinaFrontendApp.controller:RepositoryCtrl
 * @description
 * # RepositoryCtrl
 * Controller of the marinaFrontendApp
 */
angular.module('marinaFrontendApp')
  .controller('ProfileCtrl',
  [ '$scope', '$stateParams','marinaApi', 'profile_user',
    function ($scope, $stateParams, marinaApi, profile_user) {
      $scope.profile_user = profile_user;
      console.log($scope.profile_user);

  }]);
