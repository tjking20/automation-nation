var models  = require('../models');
var express = require('express');
var router  = express.Router();


//Get route that takes users to the completed law view 
router.get('/law-completed/:id', function(req, res) {
  models.law.findOne({
    where: {
      id:req.params.id
    }
  }).then(function(law) {
    res.render('politician/law-completed', {
    name: law.law_ref_id,
    description: law.law_description,
    yes_votes: law.law_votes_yes,
    no_votes: law.law_votes_no,
    politician_vote: law.law_politician_vote,
    politician_explanation: law.law_politician_explanation,
    law_resources: law.law_resources
    });
    //what should go here instead of res.send(chirps)
  });
});

router.put('/close_law/:id', function(req, res) {
  models.law.update({
    law_politician_vote: req.body.politician_vote,
    law_politician_explanation: req.body.politician_explanation,
    activity: false
  },
  {
  	where: {id : req.params.id}
  }).then(function(){
  	// This may need to have a . in front of the / to append the politicians route to the root route.
  	res.redirect('/politicians')
  })
});

router.put('/update_feedback/id:', function(req, res) {
  models.law.update({
    law_votes_yes: req.body.politician_vote,
    law_votes_no: req.body.politician_explanation
  },
  {
    where: {id : req.params.id}
  }).then(function(){
    // This may need to have a . in front of the / to append the politicians route to the root route.
    res.redirect('/politicians')
  })
});

router.post('/create_new', function(req, res) {
  console.log(req.body);
  models.law.create({
    law_ref_id: req.body.law_ref_id,      
    law_district: req.body.law_district,
    law_description: req.body.law_description,
    law_vote_period: req.body.law_vote_period,
    law_resources: req.body.law_resources
  }).then(function() {
    res.redirect('/politicians');
  });
});

//--------------------------------------------------------------------------------------------
//-------------JSB Changes here to add putlaw route 3/16/2017---------------------------------

router.post("/putlaw/:id", function(req, res) {
  models.law.update({
    law_votes_yes: req.body.law_votes_yes,
    law_votes_no: req.body.law_votes_no
  },
  {
    where: {id : req.params.id}
  }).then(function(){
    // This may need to have a . in front of the / to append the politicians route to the root route.
    res.redirect('/politicians')
  })
});
//   connection.query("UPDATE law SET law_votes_yes = ?, law_votes_no = ? WHERE id = ?", [
//     req.body.law_votes_yes, req.body.law_votes_no, req.params.id
//   ], function(err, result) {
//     if (err) {
//       console.log("crapped out")
//       throw err;
//     }
//      console.log("it worked")
//     res.redirect("/");
//   });
// });
//--------------------------------------------------------------------------------------------
router.post('/updvot/:id', function(req, res) {
  models.law.update({
    law_votes_yes: req.body.law_votes_yes,
    law_votes_no: req.body.law_votes_no
  },
  {
    where: {id : req.params.id}
  }).then(function(){
    // This may need to have a . in front of the / to append the politicians route to the root route.
    res.redirect('/politicians')
  })
});

//-------------------------------------------------------------------------------------------

module.exports = router;