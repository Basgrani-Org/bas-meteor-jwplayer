import 'lib';

// Startup
Meteor.startup(function () {
    if(Meteor.isServer ){ import 'server'; }
    if(Meteor.isClient){ import 'client'; }
});

