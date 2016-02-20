angular.module('marinaFrontendApp')
 .factory('globals', ['marinaApi', '$rootScope',
   function ($resource, $rootScope) {

     var service = {
       availableNamespaces: function() {
         var list = $rootScope.user.organizations.filter(function(o) {return o.role = 'admin'}).map(function(o){return o.name});
         list.unshift($rootScope.user.name);
         return list;
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
