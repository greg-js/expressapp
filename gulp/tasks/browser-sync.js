var gulp        = require('gulp');
var browsersync = require('browser-sync');
var config      = require('../config');

// Start browser-sync server

gulp.task('browsersync:development', function() {
  'use strict';

  // start nodemon & browser-sync only if not in production mode
  if ( process.env.NODE_ENV !== 'production' ) {
    browsersync(config.browsersync.development);
  }
});

gulp.task('browsersync:production', function() {
  'use strict';
  browsersync(config.browsersync.production);
});
