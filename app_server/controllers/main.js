/* GET home page. */
// .render compiles a view template to send as the html response that the browser will receive
// it takes the name of the view template and a JS data object
// the .jade suffix is not necessary and the path to the view folder is declared in the main express setup

module.exports.about = function(req, res) {
  res.render('generic-text', { 
    title: 'About',
    content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nDolor cum voluptatem velit itaque ab dolorum quam? Perferendis architecto molestiae aliquam vitae maiores eveniet quo reprehenderit temporibus tenetur. Quaerat!\n\nLorem iure asperiores vel ab repellendus, ab, voluptatibus voluptatum voluptas quasi? Quo cum ullam aut eum reprehenderit maxime. Neque vitae expedita perspiciatis dolores et? Voluptatem iure commodi magni quas laborum?'
  });
};

module.exports.signin = function(req, res) {
  res.render('signin-index', { title: 'Sign in to Loc8r' });
};
