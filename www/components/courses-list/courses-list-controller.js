angular.module('coursesList', ['wizzle.core'])
.controller('CoursesListController', ['$scope',function($scope) {
  $scope.data = {
    courses: [
      { name: "Course Name #1", description: "A course" },
      { name: "Course Name #2", description: "Another course"},
      { name: "Course Name #3", description: "Yet another course" }
    ]
  };
}]);


