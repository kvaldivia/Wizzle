angular.module('mainMenu', [])
.controller('MainMenuController', ['$scope', function($scope) {
  $scope.data = {
    options: ['MyCourses', 'MyDeadlines', 'Vademecum']
  };
}]);
