var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , passportLocalMongoose = require('passport-local-mongoose');
/**
 * User Schema
 */

var UserSchema = new Schema({
  name: String,
  email: String,
  provider: String,
})
UserSchema.plugin(passportLocalMongoose);
mongoose.model('User', UserSchema)
