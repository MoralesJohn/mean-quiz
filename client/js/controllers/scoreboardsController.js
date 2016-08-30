myApp.controller('scoreboardsController', function(playerFactory, questionFactory, $scope){
	var player_name = $scope.player_name;
	while (!player_name){
		player_name = prompt('Please enter your name');
		$scope.player_name = player_name;
	}

	playerFactory.getPlayers(function(players){
		$scope.players = players;
	});

	$scope.logout = function(){
		$scope.player_name = '';
		player_name = $scope.player_name;
		while (!player_name){
			player_name = prompt('Please enter your name');
			$scope.player_name = player_name;
		}
	}

});