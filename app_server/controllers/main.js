/* GET home page. */
// .render compiles a view template to send as the html response that the browser will receive
// it takes the name of the view template and a JS data object
// the .jade suffix is not necessary and the path to the view folder is declared in the main express setup

exports.index = function(req, res) {
  res.render('index.jade', { title: 'Express' });
};
