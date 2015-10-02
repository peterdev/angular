angular.module('TemplateApp').directive('taSimpleDisplay', function() {
  return {
    restrict: 'E',
    require: 'needed' ,
    scope: {
      needed: '=',
      changing: '='
    },
    template: '<h3>{{length(needed)}}</h3>',
    controller: ['$scope', function($scope) {
      $scope.length = function(array) {
      	return array.length;
      }

      $scope.$watch('changing', function(newVal) {
        if (newVal) {
          console.log(newVal)
          if (newVal == "show") {
            $scope.needed = ["one", "two"]
          };
        }
      });

    }]
  }
});