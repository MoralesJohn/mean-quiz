myApp.controller('gamesController', function(questionFactory, playerFactory, $scope){

	$scope.questions = [];

	questionFactory.getQuestion(function(data){
		console.log('factory', data);
		$scope.questions = data;
	});
	console.log('questions:', $scope.questions)
	$scope.ansSubmit = function(){
		var score = 0
		if ($scope.q0='1') {
			score++;
		}
		if ($scope.q1='1') {
			score++;
		}
		if ($scope.q2='1') {
			score++;
		}
		console.log('score is', score);
	}

});
