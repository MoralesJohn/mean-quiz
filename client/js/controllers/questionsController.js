myApp.controller('questionsController', function(questionFactory, $location, $scope){
	$scope.status = '';
	$scope.products = [];
	$scope.dup_msg = "";

	$scope.addQuestion = function(){
		questionFactory.addQuestion($scope.new_question, function(data){
			$scope.status = 'question added successfully';
			// $location.path('/');
		});
	}

	
	// $scope.isDuplicate = function(){
		
	// 		for(var i=0;i<$scope.products.length;i++){
	// 			if($scope.new_product !== undefined){
	// 				if($scope.new_product.name == $scope.products[i].name){
	// 					$scope.dup_msg = "product name is already used!"
	// 					return true;
	// 				}
	// 			}
	// 		}
		
	// 	return false; 
	// }
});