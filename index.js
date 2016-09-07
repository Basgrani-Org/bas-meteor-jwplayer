require('bas-meteor-utils');

require('./lib');

// Is Server
if (Meteor.isServer) {
    require('./server');
}

// Is Client
if (Meteor.isClient) {
    require('./client');
    exports.JWPlayer = BasMTR.JWPlayer;
}
