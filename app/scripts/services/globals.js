angular.module('marinaFrontendApp')
 .factory('globals', ['marinaApi', '$rootScope',
   function ($resource, $rootScope) {

     var service = {
       availableNamespaces: function() {
         var list = $rootScope.user.organizations.filter(function(o) {return o.role = 'admin'}).map(function(o){return o.name});
         list.unshift($rootScope.user.name);
         return list;
       },
       lastBuild: function(repository) {
         return repository.builds ? _.reverse(_.sortBy(repository.builds, function(b){return b.end}))[0] : null;
       },

       lastSuccessfulBuild: function(repository) {
         return repository.builds ? _.reverse(_.sortBy(repository.builds.filter(function(b){return b.state == "success";}), function(b){return b.end}))[0] : null;
       }
     };
     return service;

   }]);

angular.module('marinaFrontendApp')
   .run(
   ['$rootScope', 'globals',
       function ($rootScope, globals) {
         $rootScope.globals = globals;
       }
   ]);
