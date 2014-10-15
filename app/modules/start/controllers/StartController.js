'use strict';

angular.module('unittestDemo.start')
.controller('StartController', function ($scope, $log, CoursesService) {

    $scope.showResults = false;
    $scope.dataModel = {
        subject: '',
        courses: ''
    };

    $scope.fetchCourses = function () {

        CoursesService.query().$promise.then(function (response) {
            var filteredList = _.map( _.filter(response, function (elem) {
                return elem.subject === $scope.dataModel.subject;
            }), function (elem) {
               return elem.name.toLowerCase();
            });

            $scope.dataModel.courses = filteredList.join('\n');
            $scope.showResults = true;
        });
    };

    $scope.reset = function () {
        $scope.showResults = false;
        $scope.dataModel = {
            subject: '',
            courses: ''
        };
    };
});
