myApp.factory('questionFactory', function($http){
	var factory = {};
	var products = [];

	factory.getQuestion = function(callback){
		$http.get('/questions').success(function(output){
			// customers = output;
			callback(output);
		});
	};

	factory.addQuestion = function(new_question, callback){
		$http.post('/questions', new_question).success(function(output){
			
			callback(output);
		});
	}
	return factory;
});