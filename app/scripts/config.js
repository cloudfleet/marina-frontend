'use strict';

/**
 * @ngdoc config
 * @name config.marinaFrontendApp
 * @description
 * config of the marinaFrontendApp
 */
angular.module('marinaFrontendApp')
    .config(
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
            var app = angular.module('marinaFrontendApp');
            // lazy controller, directive and service
            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;
            app.constant = $provide.constant;
            app.value = $provide.value;
        }
    ]);
