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
  [ '$scope', '$stateParams', '$state','repository',
    function ($scope, $stateParams, $state, repository) {

      $scope.repository = repository;
      console.log(repository);

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

      $scope.canEdit = function()
      {
        return _.includes($scope.globals.availableNamespaces(), $scope.repository.owner_name);
      };
      $scope.addRepositoryTag = function()
      {
        $scope.repository.repository_tags.push(
          {
            docker_file_path: "/",
            name: "latest",
            reference: "master"
          });
      };
      $scope.removeRepositoryTag = function(index)
      {
        $scope.repository.repository_tags[index]['_destroy'] = 1;
      };
      $scope.save = function()
      {
        $scope.repository.$save(function() {
          $state.go("app.repository", {owner: $scope.repository.owner_name, name: $scope.repository.name});
        });
      };

  }]);
