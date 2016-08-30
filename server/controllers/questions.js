var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function(){
	return{
		show: function(req, res){
			result_arr = [];
			for(var i=0; i<3; i++){
				Question.findRandom({}, {}, {count: 3}, function(err, results){
					if(err){
						console.log(err);
					}else{
						console.log(results);
						result_arr.push(results[0]);
					}
			console.log('finished loop');	
			console.log(result_arr);
			res.json(result_arr);
				});
			}
		},
		add: function(req, res){
			console.log('add Question:', req.body.quest, req.body.correct, req.body.alt1, req.body.alt2);
			var new_Question = new Question({quest: req.body.quest, correct: req.body.correct, alt1: req.body.alt1, alt2: req.body.alt2});
			new_Question.save(function(err){
				if(err){
					console.log('*** add question failed ***');
					res.json(err);
				}else{
					module.exports.show(req, res);
				}
			});

		}

	}

})();

