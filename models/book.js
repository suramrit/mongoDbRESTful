var mongoose = require('mongoose');

// Genre Schema -- for the application 

var bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	create_date:{ 
		type: Date,
		default: Date.now
	} 
});
   
var Book = module.exports = mongoose.model('books',bookSchema);

//get Genres.. 

module.exports.getBooks = function(callback, limit){Book.find(callback).limit(limit)}

//Searching book with a particular Id, Title 
module.exports.getBookById = function(Id, callback){Book.findById(Id,callback)}
module.exports.getBookByTitle = function(title, callback){Book.find({title: title},callback)}