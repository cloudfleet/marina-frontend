'use strict';

/**
 * @ngdoc function
 * @name marinaFrontendApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the marinaFrontendApp
 */
angular.module('marinaFrontendApp')
  .controller('RepositoryListCtrl',
  [ '$scope', 'repositoryList', '$stateParams',
    function ($scope, repositoryList, $stateParams) {
      $scope.namespace = $stateParams.owner || 'All';
      $scope.repositories = repositoryList;
      console.log($scope.repositories);


  }]);
