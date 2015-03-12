/* GET 'home' page */
module.exports.home = function(req, res) {
  'use strict';
  res.render('home', {
    title: 'expressapp - simple express application',
    pageHeader: {
      title: 'expressapp',
      strapline: 'The rest is up to you!'
    },
    sidebar: 'Based on Simon Holmes\' Getting MEAN'
  });
};
