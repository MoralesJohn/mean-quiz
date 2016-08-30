var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports = (function(){
	return{
		show: function(req, res){
			Player.find({}, function(err, results){
				if(err){
					console.log(err);
					res.json(err);
				}else{
					res.json(results);
				}
			});
		},
		add: function(req, res){
			console.log('add player:', req.body.name, req.body.score, req.body.percent);
			var new_player = new Player({name: req.body.name, score: req.body.score, percent: req.body.percent});
			new_player.save(function(err){
				if(err){
					console.log('*** add player failed ***');
					res.json(err);
				}else{
					res.json({});
				}
			});

		}

	}

})();

