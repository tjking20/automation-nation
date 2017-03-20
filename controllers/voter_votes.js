var models  = require('../models');
var express = require('express');
var router  = express.Router();


////------this route does not work, but is an attempt to capture value from sequelize instead of input
// router.post('/submit_feedback', function(req, res) {
//  // console.log(req.body);

//  models.law.findOne({
//   where: {
//     id: req.params.id
//   }
//  }).then(function(laws) {
//     models.voter_vote.create({
//      //------Many of these will need to be changed once we have worked in the------------
//      // users(can be captured through params [use list app as an example to work off])
//       voter_votes_name: req.body.voter_votes_name,
//       voter_votes_id: req.body.voter_votes_id,
//       voter_votes_party: req.body.voter_votes_party,
//       voter_votes_district: law.law_district,
//       voter_votes_law_ref_id: law.law_ref_id,
//       voter_votes_law_time_period: law.law_time_period,
//       voter_votes_vote:req.body.voter_votes_vote
//     // }).then(function() {
//     //   res.redirect('/voters');
//     // });
// });

router.get('/all', function(req,res){
  models.voter_vote.findAll({
  }).then(function(voter_votes){
    res.send(voter_votes);
  });


});

// // ==========================this route is working!============================================================
router.post('/submit_feedback', function(req, res) {
	console.log(req.body);
  models.voter_vote.create({
  	//------Many of these will need to be changed once we have worked in the------------
  	// users(can be captured through params [use list app as an example to work off])
    voter_votes_name: req.body.voter_votes_name,
    voter_votes_id: req.body.voter_votes_id,
    voter_votes_party: req.body.voter_votes_party,
    voter_votes_district: req.body.voter_votes_district,
    voter_votes_law_ref_id: req.body.voter_votes_law_ref_id,
    voter_votes_law_time_period: req.body.voter_votes_law_time_period,
    voter_votes_vote:req.body.voter_votes_vote
  }).then(function() {
    res.redirect('/voters');
  });
});

module.exports = router;