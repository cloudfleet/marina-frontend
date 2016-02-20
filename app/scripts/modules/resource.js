var module = angular.module( 'rails.resource', [ 'ngResource' ] );

module.factory( 'Resource', [ '$resource', function( $resource ) {
  return function( url, params, methods ) {
    var defaults = {
      update: { method: 'put', isArray: false },
      create: { method: 'post' }
    };
    methods = angular.extend( defaults, methods );

    var resource = $resource( url, params, methods );

    resource.prototype.$save = function(success_callback, error_callback) {
      if ( !this.id ) {
        return this.$create(success_callback, error_callback);
      }
      else {
        return this.$update(success_callback, error_callback);
      }
    };

    return resource;
  };
}]);
