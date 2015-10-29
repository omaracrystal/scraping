var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hell', function(req, res, next) {
  //ajax request
  var newsYrl = 'https://news.ycombinator.com';
  //res and response need to be different to not intefer
  var newsHtml = request(newsUrl, function(err, response, html) {

  //parse html
  var $ = cheerio.load(html);
  var newsTitle = $('td.title a').first().text();
  console.log(title);

  //is javascript in the title
  var newsHasJavascript = title.match('javascript');

  console.log('line 24', hasJavascript);

  res.send(title.match('javascript') === true);

  if (!newsHasJavascript) {
    // request python.org, return something fun
    var pythonUrl = 'https://python.org';
    var pythonHtml = request(pythonUrl, function(err, response, html) {
      //parse html
      var $ = cheerio.load(html);
      var pythonLogo = $('img');
      res.send('.img src="https://python.org/'+pythonLogo+">');

    });

  } else {
    // request reddit, parse, test if javascript is part of the title
    //ajax request
    var redditUrl = 'https://www.reddit.com/r/Web_Development/';
    //res and response need to be different to not intefer
    var redditHtml = request(redditUrl, function(err, response, html) {

      //parse html
      var $ = cheerio.load(html);
      var redditTitle = $('td.title a').first().text();
      console.log(redditTitle);

      //is javascript in the title
      var redditHasJavascript = title.match('javascript');
  }

  });

})

module.exports = router;
