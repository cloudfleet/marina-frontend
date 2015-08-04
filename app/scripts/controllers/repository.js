'use strict';

/**
 * @ngdoc function
 * @name marinaFrontendApp.controller:RepositoryCtrl
 * @description
 * # RepositoryCtrl
 * Controller of the marinaFrontendApp
 */
angular.module('marinaFrontendApp')
  .controller('RepositoryCtrl',
  [ '$scope', '$stateParams','marinaApi',
    function ($scope, $stateParams, marinaApi) {

      var repository_full_name = $stateParams.owner + "/" + $stateParams.name;

      console.log('Creating scope');

      marinaApi.getRepository(repository_full_name).then(function(data){
        $scope.repository = data;
      });

      $scope.lastBuild = function() {
        if($scope.repository["builds"]) {
          return $scope.repository["builds"]
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

      $scope.lastSuccessfulBuild = function(repository) {
        if($scope.repository["builds"]) {
          return $scope.repository["builds"]
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
