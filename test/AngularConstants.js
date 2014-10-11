angular.module('opkokoDemoApp', [
    'ngResource',
    'ui.router',
    'ngStorage',
    'unittestDemo.resources',
    'unittestDemo.start',
    'ui.bootstrap',
    'ngAnimate'
]);

angular.module('opkokoDemoApp')
    .constant('ABS_URL', '');

angular.module('unittestDemo', ['opkokoDemoApp']);
