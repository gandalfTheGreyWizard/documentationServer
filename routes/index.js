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

			//console.log("contents of file are", data);
			//const tree = md.parse(data);
			//const refs = tree[1].references;
			// 
      // iterate through the tree finding link references
			//( function find_link_refs( jsonml ) {
			//  if ( jsonml[ 0 ] === "link_ref" ) {
			//    var ref = jsonml[ 1 ].ref;
			// 
			//    // if there's no reference, define a wiki link
			//    if ( !refs[ ref ] ) {
			//      refs[ ref ] = {
			//        href: "http://en.wikipedia.org/wiki/" + ref.replace(/\s+/, "_" )
			//      };
			//    }
			//  }
			//  else if ( Array.isArray( jsonml[ 1 ] ) ) {
			//    jsonml[ 1 ].forEach( find_link_refs );
			//  }
			//  else if ( Array.isArray( jsonml[ 2 ] ) ) {
			//    jsonml[ 2 ].forEach( find_link_refs );
			//  }
			//} )( tree );
			 
			// convert the tree into html
			//html = md.renderJsonML( md.toHTMLTree( tree ) );
			contentsDict[eachMarkdownFile] = html;
		} catch(error) {
			console.error(error);
		}
	});
	res.render('index', { contents: contentsDict });
});
module.exports = router;
