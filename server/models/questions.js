var mongoose = require('mongoose');
var random = require('mongoose-simple-random');

var QuestionSchema = new mongoose.Schema({
	quest: {type:String, minlength: 15, required: true},
	correct: {type:String, required: true},
	alt1: {type:String, required: true},
	alt2: {type:String, required: true}
});
QuestionSchema.plugin(random);

mongoose.model('Question', QuestionSchema);