'use strict';

/**
 * @ngdoc function
 * @name marinaFrontendApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the marinaFrontendApp
 */
angular.module('marinaFrontendApp')
  .controller('DashboardCtrl',
  [ '$scope', 'marinaApi',
    function ($scope, marinaApi) {
      console.log('Creating dashboard scope');

      marinaApi.getRepositories().then(function(data){
        $scope.repositories = data;
      });

      $scope.lastBuild = function(repository) {
        if(repository["builds"]) {
          return repository["builds"]
            .sort(function(b1, b2) {
              if(b1.end_time == b2.end_time)
              {
                return 0;
              }
              if(!b1.end_time)
              {
                return 1;
              }
              if(!b2.end_time)
              {
                return -1
              }
              return b1.end_time < b2.end_time ? 1 : -1;
            })
            [0]
        }
        else {
          return null;
        }
      };

      $scope.lastSuccessfulBuild = function(repository) {
        if(repository["builds"]) {
          return repository["builds"]
            .filter(function(b){return b.success;})
            .sort(function(b1, b2) {
              if(b1.end_time == b2.end_time)
              {
                return 0;
              }
              return b1.end_time < b2.end_time ? 1 : -1;
            })
            [0]
        }
        else {
          return null;
        }
      };

  }]);
