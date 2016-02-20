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
  [ '$scope', '$stateParams','repository',
    function ($scope, $stateParams, repository) {

      $scope.repository = repository;

      $scope.lastBuild = function() {
        if($scope.repository["builds"]) {
          return $scope.repository["builds"]
            .sort(function(b1, b2) {
              if(b1.end == b2.end)
              {
                return 0;
              }
              return b1.end < b2.end ? 1 : -1;
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
            .filter(function(b){return b.state == "success";})
            .sort(function(b1, b2) {
              if(b1.end == b2.end)
              {
                return 0;
              }
              return b1.end < b2.end ? 1 : -1;
            })
            [0]
        }
        else {
          return null;
        }
      };

      $scope.addRepositoryTag = function()
      {
        $scope.repository.repository_tags.push(
          {
            docker_file_path: "/",
            name: "latest",
            reference: "master"
          });
      }
      $scope.removeRepositoryTag = function(index)
      {
        $scope.repository.repository_tags.splice(index, 1);
      }

  }]);
