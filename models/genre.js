var mongoose = require('mongoose');

// Genre Schema -- for the application 

var genreSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{ 
		type: Date,
		default: Date.now
	} 
});
   
var Genre = module.exports = mongoose.model('genres',genreSchema);

//get Genres.. 

module.exports.getGenres = function(callback, limit){Genre.find(callback).limit(limit)}