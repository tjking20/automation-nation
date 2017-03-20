var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Laws' });
});

router.post('/create', function(req, res, next) {
    res.render('index', { title: 'Laws' });
});

module.exports = router;
