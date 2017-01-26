var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Genre = require('./models/genre');
var Book = require('./models/book');
//connect to mongoDB
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;
// /api/genres should give a json of the existing jsons in the data base. 

//GET::

app.get('/',function(req,res){
	res.send('please use /apibook/ to access');
}); //handle a get req to param URI


app.get('/api/genre',function(req,res){
	Genre.getGenres(function(err,genres){
		if(err){
			throw err;
		}	
		res.json(genres).pretty();
	});
});

app.get('/api/books',function(req,res){
	Book.getBooks(function(err,books){
		if(err){
			throw err;
		}	
		res.json(books);
	});
});

app.get('/api/books/:_id',function(req,res){
	Book.getBookById(req.params._id,function(err,book){
		if(err){
			throw err;
		}	
		res.json(book);
	});
	//console.log('nothing found brah')
});


app.get('/api/books/title/:title',function(req,res){ 
	Book.getBookByTitle(req.params.title,function(err,book){
		if(err){
			throw err;
		}	
		res.json(book);
	});
	//console.log('nothing found brah')
});

//POST:: 
app.listen(3030);
console.log('Running on port 3030');