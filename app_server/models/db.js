var mongoose = require('mongoose');

var dbURI = null;
if (process.env.NODE_ENV === 'production') {
  dbURI = 'mongodb://<username>:<password>@<hostname>:<port>/<database>';
  // Don't use this if source code is in public repository. Use an environment variable instead such ass process.env.MONGOLAB_URI
  console.log('Starting app in production mode...');
}
else {
  dbURI = 'mongodb://localhost/expressapp';
}

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
  'use strict';
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
  'use strict';
  console.log('Mongoose connection error: ' + err);
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
