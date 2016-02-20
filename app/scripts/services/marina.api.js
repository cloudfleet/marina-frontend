'use strict';

/**
 * @ngdoc service
 * @name marinaFrontendApp.cockpit.api
 * @description
 * # cockpit.api
 * Service in the marinaFrontendApp.
 */
angular.module('marinaFrontendApp')
  .factory('marinaApi', ['Resource', '$http', '$q', '$rootScope', '$state',
    function ($resource, $http, $q, $rootScope, $state) {

      var localStorageBuildlogsKeyPrefix = 'marina.builds.logs.';

      var service = {

        User: $resource(
          '/api/v1/users/:id',
          {id:'@id'}
        ),

        Repository: $resource(
          '/api/v1/repos/:namespace/:name',
          {namespace: '@owner_name', name: '@name'},
          {create: {url: '/api/v1/repos', method: 'POST'}}
        ),

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
        getBuildLogs: function (full_name, build_id) {

          var deferred = $q.defer();

          $http.get('/api/v1/repos/' + full_name + '/builds/' + build_id + '/logs').
            success(function (data) {
              deferred.resolve(data);
            }).
            error(function () {
              deferred.resolve(null);
            });
          return deferred.promise;
        }
      };
      return service;

    }]);
