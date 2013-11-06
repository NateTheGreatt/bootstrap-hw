var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

/**
 * User Schema
 */
var AssignmentSchema = new Schema({
  name: String,
  cid: String,
});

mongoose.model('Assignment', AssignmentSchema);
