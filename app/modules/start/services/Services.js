'use strict';
var module = angular.module('unittestDemo.resources', []);

module.factory('CoursesService', function($resource, ABS_URL) {
    return $resource(ABS_URL + '/Courses.json', {}, {
        query: { method: 'GET', params: {}, isArray: true }
    });
});