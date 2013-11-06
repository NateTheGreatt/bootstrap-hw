
/*
 * GET home page.
 */

var mongoose = require('mongoose')
  , Assignment = mongoose.model('Assignment');


exports.index = function(req, res) {
  var assignment = new Assignment();
      assignment.cid = 'IS 117';
      assignment.title = 'Build a web page';
      assignment.save(function (err) {
        console.log(err);
      });
  
  Assignment.find({}, function(err, assignments) {
    res.render('index', { 
      title: 'Personal Learning Platform', 
      assignments: assignments 
    });
 });
}
