'use strict';

angular.module('opkokoDemoApp', [
    'ngResource',
    'ui.router',
    'ngStorage',
    //'unittestDemo.resources',
    'unittestDemo.start',
    'ui.bootstrap',
    'ngAnimate',
    'angularjs-dropdown-multiselect'
])

    .config(function myAppConfig() {
    })

    .run(function run($state, $location) {

        if ($location.search().state) {
            $state.go($location.search().state);
        } else {
            $state.go('start');
        }
    })

    .config(function myAppConfig($stateProvider) {
        $stateProvider
            .state('start', {
                templateUrl: 'modules/start/views/start.html',
                controller: 'StartController'
            });
    });
