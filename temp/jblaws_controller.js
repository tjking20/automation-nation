var models  = require('../models');
var express = require('express');
var router  = express.Router();

//app.get 

router.get('/', function(req, res) {
  models.law.findAll({
  }).then(function(laws) {
    //res.send(you can send the html file)
    res.render('law/index', {law: law})
    //what should go here instead of res.send(chirps)
  });
});
router.get('/maklaw', function(req, res){
  res.send('hi')
})

router.post('/maklaw', function(req, res) {
  console.log(req);

  models.law.create({
    law_ref_id: req.body.law_ref_id,      
    law_district: req.body.law_district,
    law_description: req.body.law_description,
    law_vote_period: req.body.law_vote_period,
    law_votes_yes: req.body.law_votes_yes, 
    law_votes_no: req.body.law_votes_no, 
    law_politician_vote: req.body.law_politician_vote,
    law_politician_explanation: req.body.law_politician_explanation
     
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;
