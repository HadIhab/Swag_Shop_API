var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/swag-shop', { useNewUrlParser: true,useUnifiedTopology: true });

var Product = require('./model/product');
var WishList = require('./model/wishlist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/product',function(req,res){
	var product = new Product();
	product.title = req.body.title;
	product.price = req.body.price;
	peoduct.save(function(err,savedProduct){
		if(err){
			res.status(500).send({error:"Could not save product"});
		}
		else{
			res.status(200).send(savedProduct);
		}
	});
});
/*var ingredients = [ {id:0, text:'Pepper'},{id:1, text:'Salt'},{id:2, text:'Sugar'} ];

app.get('/',function(req,res){
	res.send('This is the base URL of this simple API.');
});
app.get('/ingredients',function(req,res){
	res.send(ingredients);
});
app.delete('/ingredients/:ingredientId',function(req,res){
	
});
app.put('/ingredients/:ingredientId',function(req,res){

	var newText = req.body.text;
	if (!newText || newText === ""){
		res.status(500).send({error: "You must provide ingredient text"})
	}
	else{
		for (var i = 0; i < ingredients.length; i++ ){
			
			if(ingredients[i].id == req.params.ingredientId){
				ingredients[i].text = newText;
				break;
			}
		}
		res.send(ingredients);
	}
});*/

app.listen(3000,function(){
	console.log('[INFO]: CRUD API is running on server..');	
});
