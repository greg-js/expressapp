var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/expressapp';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
  'use strict';
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
  'use strict';
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
  'use strict';
  console.log('Mongoose disconnected');
});

var gracefulShutdown = function(msg, callback) {
  'use strict';
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

process.once('SIGUSR2', function() {
  'use strict';
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.on('SIGINT', function() {
  'use strict';
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});

process.on('SIGTERM', function() {
  'use strict';
  gracefulShutdown('Heroku app shutdown', function() {
    process.exit(0);
  });
});
