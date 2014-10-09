'use strict';
var module = angular.module('unittestDemo.resources', []);

module.factory('CoursesService', function($resource) {
    return $resource('/modules/start/testdata/Courses.json', {}, {
        query: { method: 'GET', params: {}, isArray: true }
    });
});