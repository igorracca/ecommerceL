var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../lib/User'); //Contains User Schema, model and creates an admin user if it does not exist

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/l');

var productSchema = mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String
});

var ProductModel = mongoose.model('products', productSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
})

router.get('/products', function(req, res) {
  ProductModel.find({}, function(err, products) {
      if(err) {
        console.log(err);
        res.status(500).send();
      } else {
        var responseObject = [];
        products.forEach(function(product) {
          console.log('%s, %s, %s', product.name, product.description, product.price);
          responseObject.push({name: product.name, description: product.description, price: product.price, category: product.category})
        });     
        res.status(200).send(responseObject)
      }
  }) 
});

router.get('/products/:category', function(req, res) {
  var category = req.params.category;
  ProductModel.find({ 'category': category }, 'name description price', function(err, products) {
      if(err) {
        console.log(err);
        res.status(500).send();
      } else {
        var responseObject = [];
        products.forEach(function(product) {
          console.log('%s, %s, %s', product.name, product.description, product.price);
          responseObject.push({name: product.name, description: product.description, price: product.price})
        });
        res.status(200).send(responseObject)
      }
  }) 
});

router.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({username: username, password: password}, function(err, user) {
    if(err) {
          console.log(err);
        return res.status(500).send();
    } 
    if(!user) {
      return res.status(404).send('Wrong username or password! <br> <a href="/">back</a>');
    }
    req.session.user = user;
    console.log('admin logged in!');
    return res.status(200).render('addproduct', {});
  })
})

router.post('/products/add', function(req,res){
  if(!req.session.user) {
    return res.status(401).send();
  }
 
  var newProduct = new ProductModel();
  newProduct.name = req.body.name;
  newProduct.description = req.body.description;
  newProduct.price = req.body.price;
  newProduct.category = req.body.category;

  req.assert('name', 'Name is required').notEmpty(); 
  req.assert('price', 'Price is required').notEmpty(); 
  req.assert('price', 'Price has to be greater than zero').isFloat({ min: 0.01});
  req.assert('category', 'Category is required').notEmpty();  
  var errors = req.validationErrors(); 

  if(errors) {   //Display errors to user
    console.log('Validation error');
    return res.send('Validation error! Pay attetion to the placeholders. <br> <a href="/">back</a>');
  }

  newProduct.save(function(err, savedObject) {
    if(err) {
      console.log(err);
      res.status(500).end();
    } else {
      console.log('Product added sucessfully!');
      res.status(200).send('Product added sucessfully! <br> <a href="/">back</a>');
    }
  });
})

module.exports = router;
