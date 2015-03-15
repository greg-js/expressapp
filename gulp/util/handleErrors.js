var notify = require('gulp-notify');

module.exports = function() {
  'use strict';
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Allow gulp to continue after this
  this.emit('end');
};
