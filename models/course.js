var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

/**
 * Course Schema
 */
var CourseSchema = new Schema({
  cid: String,  
  section: String,
  title: String,
});

mongoose.model('Course', CourseSchema);
