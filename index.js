/* jshint -W020 */
BasMTR = require('bas-meteor-utils').BasMTR;
/* jshint +W020 */
exports.BasMTR = BasMTR;

if(BasMTR.jwplayer_isInit){return;}

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

BasMTR.jwplayer_isInit = true;
