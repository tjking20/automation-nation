var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.render('voter', { title: 'Voters' });
});

router.get('/new_bill_feedback', function(req, res){
    res.render('voter_feedback');
});

router.post('/submit_feedback', function(req, res) {
  console.log(req.body.voter_choice);
  res.redirect('/');
  
  // models.voter.create({
  //   name: req.body.name,
  //   email: req.body.email,
   
   //promise yielded issue in nodemon
  // }).then(function() {
  //   res.redirect('/');
  // });
});


//update "new law form" (submit feedback on new law) 
//when hooking make sure that law id is entered correctly
// router.put('/new_law/:law_id', function (req, res){

	
// });

module.exports = router;