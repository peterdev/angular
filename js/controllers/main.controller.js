angular.module('TemplateApp').controller('MainController', ['asyncService', '$scope', function(asyncService, $scope) {
 	
 	$scope.app_name = "Template App";
 	$scope.inp_val = ""
	$scope.foo = "foo"
 	$scope.bar = "bar"

 	$scope.test1 = function(){
 		return "hello-world";
 	}

}]);


