var express = require('express');
var router = express.Router();

var videoData = require('../data/data.json');
var baseVideoURL = "https://www.thenewboston.com/videos_food.php?cat=";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
  	title: 'Express',
  	name: 'Vince',
  	videoData: videoData,
  	baseURL: baseVideoURL
   });
});

module.exports = router;
