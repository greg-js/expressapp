var ctrl = require('../app_server/controllers/main.js');

module.exports = function(app) {
  app.get('/', ctrl.index);
};
