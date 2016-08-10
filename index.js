BasMTR = require('bas-meteor-utils').BasMTR;
exports.BasMTR = BasMTR;

require('./lib');

// Is Server
if(Meteor.isServer){
    require('./server');
}

// Is Client
if(Meteor.isClient){
    require('./client');
    exports.JWPlayer = BasMTR.JWPlayer;
}
