var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: 'This is the FakeBook API index page. Please connect to an endpoint with data.' });
});

module.exports = router;
