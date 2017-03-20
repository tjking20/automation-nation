var models  = require('../models');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  models.law.findAll({
  }).then(function(laws) {
    models.voter_vote.findAll({
    }).then(function(voter_votes) {
      res.render('voter/voter', {
        voter_votes: voter_votes,
        title: 'Voters',
        laws: laws,
        activity: laws.activity
      });
    });
  });
});


router.get('/voter_feedback/:id', function(req, res) {

  models.law.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(law) {
      // res.send(law); this will return json!!!!
      res.render('voter/voter_feedback', {
      id: law.law_ref_id,
      description: law.law_description,
      district: law.law_district,
      period: law.law_vote_period,
      ref_id:law.law_ref_id,
      law_resources: law.law_resources
    })
  });
});


	
// });

module.exports = router;