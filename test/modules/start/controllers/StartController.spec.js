describe('controller: StartController', function() {
    var $rootScope,
        $scope,
        $log,
        CoursesService,
        mockResponse = [{id: 1, name: 'English', subject: 'Languages'}, {id: 2, name: 'Compiler construction', subject: 'Computer science'}];

    beforeEach(module('unittestDemo.start'));
    beforeEach(module('unittestDemo.resources'));

    beforeEach(inject( function(_$rootScope_, $q, _$log_, _CoursesService_) {

        $rootScope = _$rootScope_;
        CoursesService = _CoursesService_;

        spyOn(CoursesService, 'query').andCallFake(function () {
            var deferred = $q.defer();
            deferred.resolve(mockResponse);
            return {$promise: deferred.promise};
        });
    }));


    beforeEach(inject(function($controller) {
        $scope = $rootScope.$new();

        $controller('StartController', {
            '$scope': $scope,
            '$log': $log,
            'CoursesService': CoursesService
        });
    }));

    describe('StartController: fetchCourses', function() {

        it('Given a subject, fetchCourses should filter the courses belonging to the same subject', function() {
            $scope.dataModel.subject = 'Languages';
            $scope.fetchCourses();
            $rootScope.$apply();
            expect(CoursesService.query).toHaveBeenCalled();
            expect($scope.dataModel.courses).toEqual('English');

        });

    });
});