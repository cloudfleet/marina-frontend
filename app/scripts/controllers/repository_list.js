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
  [ '$scope', 'repositoryList',
    function ($scope, repositoryList) {

      $scope.repositories = repositoryList;
      console.log($scope.repositories);


  }]);
