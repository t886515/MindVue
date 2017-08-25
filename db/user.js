const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  user_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    require: true
  },
  username: { 
    type: String, 
    require: true 
  },
  password: { 
    type: String, 
    require: true 
  }
})

var User = mongoose.model('User', userSchema);

module.exports = User;