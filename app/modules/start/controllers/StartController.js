'use strict';
var module = angular.module('unittestDemo.start');

module.controller('StartController', function ($scope, $log) {

    $scope.dataModel = {
        subject: '',
        courses: ''
    };


    $scope.validateForm = function () {

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
