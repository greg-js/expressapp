var gutil = require('gulp-util');
var prettyHrtime = require('pretty-hrtime');
var startTime;

// Provides gulp style logs for bundle method in browserify.js

module.exports = {
  start: function(filepath) {
    'use strict';
    startTime = process.hrtime();
    gutil.log('Bundling', gutil.colors.green(filepath));
  },

  end: function(filepath) {
    'use strict';
    var taskTime = process.hrtime(startTime);
    var prettyTime = prettyHrtime(taskTime);
    gutil.log('Bundled', gutil.colors.green(filepath), 'in', gutil.colors.magenta(prettyTime));
  }
};
