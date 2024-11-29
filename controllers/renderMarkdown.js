const md = require('markdown').markdown;
const showdown = require('showdown');
const fs = require('fs');
exports.renderToHtml = (req, res)  => {
  // trying to use showdown instead of markdown
  let converter = new showdown.Converter();
  fs.readFile('./docs/' + req.query.name + '.md', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.send("Error reading file");
    } else {
      const html = converter.makeHtml(data);
      console.log(html);
      res.render('docs', {htmlToParse: html, title: req.query.name});
    }
  });
	//const fileName = req.query.name + '.md';
	//const data = fs.readFileSync('./docs/' + fileName, 'utf-8');
	//const tree = md.parse(data);
	//const contentsDict = {};
	//const listItems = [];
	//try {
		//const files = fs.readdirSync('./docs');
		//files.forEach(eachFile => {
			//console.log('file type', eachFile.slice(-2,));
			//if (eachFile.slice(0, 1) === '.' || eachFile.slice(-2, ) !== 'md') {
				//console.log("not pushing ", eachFile);
			//} else {
				//listItems.push(eachFile.slice(0,-3));
			//}
		//});
	//} catch(error) {
		//console.log("Error reading ./docs directory, make sure the directory exists in the root folder");
	//}
  //console.log(listItems);
	//try {
		//const refs = tree[1].references;
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
		// 
		//html = md.renderJsonML( md.toHTMLTree( tree ) );
		//contentsDict['htmlToParse'] = html;
		//contentsDict['title'] = fileName;
		//contentsDict['listItems'] = listItems;
		//res.render('docs', contentsDict);
	//} catch(error) {
		//contentsDict['title'] = fileName;
		//contentsDict['listItems'] = listItems;
		//res.render('docs', contentsDict);
	//}
}
