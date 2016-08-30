var mongoose = require('mongoose');
var PlayerSchema = new mongoose.Schema({
	name: {type:String, required: true},
	score: {type:Number, required: true},
	percent: {type:Number, required: true}
});

mongoose.model('Player', PlayerSchema);