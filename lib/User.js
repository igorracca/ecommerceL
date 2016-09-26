var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: {type: String, unique: true},
	password: {type: String}
});

var User = mongoose.model('myuser', userSchema);

// Creates an Admin user if it does not exist
User.findOne({username: "admin"}, function(err, foundObject) {
    if(!foundObject) {
	  var newUser = new User();
	  newUser.username = "admin";
	  newUser.password = "admin";
	  newUser.save(function(err, savedUser) {
	    if(err) {
	      console.log(err);
		  return res.status(500).send();
	    }
	    console.log('user admin was created.');
	  })
	}
})

module.exports = User;