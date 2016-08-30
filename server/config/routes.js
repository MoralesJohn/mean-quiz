var players = require('./../controllers/players.js');
var questions = require('./../controllers/questions.js');

module.exports = function(app){
	app.get('/players', function(req, res){
		players.show(req, res);
	});

	app.post('/players', function(req, res){
		players.add(req, res);
	});

	app.get('/questions', function(req, res){
		questions.show(req, res);
	});

	app.post('/questions', function(req, res){
		questions.add(req, res);
	});

}