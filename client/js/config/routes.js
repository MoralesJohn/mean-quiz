myApp.config(function($routeProvider){

	 $routeProvider
	 		.when('/', {
	 			templateUrl: './../static/partials/scoreboard.html',
	 			controller: "scoreboardsController"
	 		})
	        .when('/gameplay',{
	            templateUrl: './../static/partials/gameplay.html',
	            controller: "gamesController"
	        })
	        .when('/question',{
	            templateUrl: './../static/partials/question.html',
	            controller: "questionsController"
	        })
	        .otherwise({
	          redirectTo: '/'
	        });
})