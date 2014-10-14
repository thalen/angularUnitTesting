angular.module('opkokoDemoApp', [
    'ngResource',
    'ui.router',
    'unittestDemo.resources',
    'unittestDemo.start',
    'ui.bootstrap'
]);

angular.module('opkokoDemoApp')
    .constant('ABS_URL', '');

angular.module('unittestDemo', ['opkokoDemoApp']);
