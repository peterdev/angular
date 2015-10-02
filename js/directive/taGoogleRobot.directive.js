angular.module('TemplateApp').directive('taGoogleRobot', function() {
  return {
    restrict: 'E',
    scope: {},
    template: '<h3>shit - {{queryResult}}</h3>',
    controller: ['$scope', '$http', function($scope, $http) {
      	$scope.queryResult = null;

      	$http({
          method: 'JSON',
          url: "https://api.github.com/users/mralexgray/repos"
        }).success(function(data) {
          if(data)
          	$scope.queryResult = data;
        });
    }]
  }
});