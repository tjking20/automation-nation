var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/mission-doc', function(req, res) {
  res.render('mission');
});

router.get('/upcoming-features', function(req, res){
	res.render('upcoming-features')
});


module.exports = router;

module.exports = router;
