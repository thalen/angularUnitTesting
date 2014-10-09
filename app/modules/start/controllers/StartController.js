'use strict';
var module = angular.module('unittestDemo.start');

module.controller('StartController', function ($scope, $log, CoursesService) {

    $scope.dataModel = {
        subject: '',
        courses: ''
    };


    $scope.fetchCourses = function () {

        CoursesService.query().$promise.then(function (response) {
            $scope.dataModel.courses = _.map( _.filter(response, function (elem) {
                return elem.subject === $scope.dataModel.subject;
            }), function (elem) {
               return elem.name;
            });
        });

        $scope.dataModel.courses = 'Linear algebra\nJava programming';
        $scope.showResults = true;
    };

    $scope.reset = function () {
        $scope.showResults = false;
        $scope.dataModel = {
            subject: '',
            courses: ''
        };
    };

    $scope.showResults = false;


});
