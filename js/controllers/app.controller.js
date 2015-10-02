angular.module('TemplateApp').controller('SampleController', ['$scope', 'general', function($scope, general) {
 	
 	$scope.pub_dataset = [1, 2, 3, 4, 5];
	var dataset = [1, 2, 3, 4, 5];

	$scope.calculateEven = function(){
		var ret = [];
		for (var i = dataset.length - 1; i >= 0; i--) {
			general.isEven(dataset[i], function(bool){
				if(bool)
					ret.push(dataset[i])
			})
		};
		return ret;
	}

}]);


