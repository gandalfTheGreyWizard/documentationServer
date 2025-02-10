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
  let converter = new showdown.Converter();
  fs.readFile('./docs/' + req.query.name + '.md', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.send("Error reading file");
    } else {
      let html = converter.makeHtml(data);
      const img_src_reg = new RegExp(/src="(.+?)"/g);
      html = html.replace(img_src_reg, (match, p1) => {
        return `src="${process.env.BASE_URL}${p1.slice(1)}"`;
      });
      res.render('docs', {htmlToParse: html, title: req.query.name, markdownFiles});
    }
  });
}
