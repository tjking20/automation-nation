var models  = require('../models');
var express = require('express');
var router = express.Router();


// Our main view for a politician user, this version will display laws in the database and present a form to fill out.
router.get('/', function(req, res) {
	models.law.findAll({
  }).then(function(laws){
    //res.send(you can send the html file)
      res.render('politician/politician', {
        title: 'politician',
        laws: laws
    });
  });
});

router.get('/laws/:id', function(req, res) {
   models.law.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(law) {
      // res.send(law); this will return json!!!!
      res.render('politician/close-out-law', {
      // In version two may have to make another find query to get voter_votes to show the current votes for the bill.
      name: law.law_ref_id,
      id: law.id,
      description: law.law_description
    })
  });
});

router.get('/law_create', function(req, res) {
  models.law.findAll({
  }).then(function(laws){
     res.render('politician/lawindex', {
        title: 'politician',
        laws: laws
    });
  });
});


// // This will activate when the form is submitted and the new bill should be pushed into the database.
// router.post('/create', function(req,res) {
// 	//make sure that user inserting is a politician, for testing the if statement can be commented out.
// 	// DO WE NEED A LAW MODEL TO USE TO POST TO LAW TABLE?
// 	models.Law.create({
//     law_ref_id: req.body.law_ref_id,
//     law_description: req.body.law_description
//   }).then(function() {
//     res.redirect('/');
//   });
// });

// router.put('/update', function (req, res){
	
// });

module.exports = router;