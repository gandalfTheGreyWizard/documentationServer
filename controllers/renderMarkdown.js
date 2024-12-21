const md = require('markdown').markdown;
const showdown = require('showdown');
const fs = require('fs');
exports.renderToHtml = (req, res)  => {
  // trying to use showdown instead of markdown
  let markdownFiles = fs.readdirSync('./docs').filter(file => {
    if (file.includes('.md')) {
      return true;
    };
  }).map(file => { return file.split('.')[0] });
  console.log(markdownFiles);
  let converter = new showdown.Converter();
  fs.readFile('./docs/' + req.query.name + '.md', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.send("Error reading file");
    } else {
      const html = converter.makeHtml(data);
      res.render('docs', {htmlToParse: html, title: req.query.name, markdownFiles});
    }
  });
}
