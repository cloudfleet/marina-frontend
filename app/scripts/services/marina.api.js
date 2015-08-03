'use strict';

/**
 * @ngdoc service
 * @name marinaFrontendApp.cockpit.api
 * @description
 * # cockpit.api
 * Service in the marinaFrontendApp.
 */
angular.module('marinaFrontendApp')
  .factory('marinaApi', ['$resource', '$http', '$q', '$rootScope', '$state', '$localstorage',
    function ($resource, $http, $q, $rootScope, $state, $localstorage) {

      var localStorageBuildlogsKeyPrefix = 'marina.builds.logs.';

      var service = {

        getRepositories: function () {

          var deferred = $q.defer();

          $http.get('/api/v1/repos/').
            success(function (data) {
              deferred.resolve(data.repositories);
            }).
            error(function () {
              deferred.resolve(null);
            });
          return deferred.promise;
        },
      };
      return service;

    }]);
