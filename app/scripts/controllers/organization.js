'use strict';

/**
 * @ngdoc function
 * @name marinaFrontendApp.controller:OrganizationCtrl
 * @description
 * # OrganizationCtrl
 * Controller of the marinaFrontendApp
 */
angular.module('marinaFrontendApp')
  .controller('OrganizationCtrl',
  [ '$scope', '$stateParams', '$state', 'marinaApi', 'organization',
    function ($scope, $stateParams, $state, marinaApi, organization) {
      $scope.organization = organization;

      $scope.save = function()
      {
        $scope.organization.$save(function() {
          $state.go("app.organization_edit", {id: $scope.organization.id});
        });
      };


  }]);
