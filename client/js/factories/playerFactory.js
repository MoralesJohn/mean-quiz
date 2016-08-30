var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);

myApp.factory('playerFactory', function($http){
	var factory = {};

	factory.getPlayers = function(callback){
		// $http.get('/players').success(function(output){
		// 	callback(output);
		// });
	};
	factory.addPlayer = function(new_customer, callback){
		$http.post('/players', new_customer).success(function(output){
			
			callback(output);
		});
	}


	return factory;
});

