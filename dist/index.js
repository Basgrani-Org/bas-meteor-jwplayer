'use strict';

require('bas-meteor-utils');

require('./init');

require('./lib');

// Is Server


// Import Init
if (Meteor.isServer) {
  require('./server');
}

// Is Client


// Import libs
if (Meteor.isClient) {
  require('./client');
  exports.JWPlayer = BasMTR.JWPlayer;
}
