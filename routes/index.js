var express = require('express');
var router = express.Router();
const fs = require('fs');
const md = require('markdown').markdown;
const showdown = require('showdown');
/* GET home page. */
router.get('/', function(req, res, next) {
  let converter = new showdown.Converter();
	const contentsDict = {};
	console.log("inside");
	const files = fs.readdirSync('./docs/');
	files.forEach(eachMarkdownFile => {
		console.log("each file is", eachMarkdownFile);
		try {
			const data = fs.readFileSync('./docs/' + eachMarkdownFile, 'utf-8');
      console.log(`data is ${data}`);
      // section to convert markdown using showdown
      const html = converter.makeHtml(data);
      console.log(`html is ${html}`);
			contentsDict[eachMarkdownFile] = html;
		} catch(error) {
			console.error(error);
		}
	});
	res.render('index', { contents: contentsDict });
});
module.exports = router;
