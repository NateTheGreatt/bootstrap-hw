
/*
 * GET home page.
 */

var mongoose = require('mongoose')
  , Course = mongoose.model('Course');


exports.index = function(req, res) {
  /*var course = new Course();
      course.cid = 'IS 117';
      course.title = 'Introduction to Building Websites';
      course.save(function (err) {
        console.log(err);
      });*/
  
  Course.find({}, function(err, courses) {
    res.render('index', { 
      title: 'Personal Learning Platform', 
      courses: courses 
    });
 });
}
