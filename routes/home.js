var ctrl = require('../app_server/controllers/home');

module.exports = function(app) {
  'use strict';
  app.get('/', ctrl.home);
};
