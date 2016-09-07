var _ = require('underscore');

// JWPlayer
(function (mtr) {
    // Set start point
    if (!BasMTR.JWPlayer) {
        BasMTR.JWPlayer = {};
    }
    var _this = function () {
        return BasMTR.JWPlayer;
    }();

    _this._loaded = new ReactiveVar(false);

    _this.load = _.once(function (token) {
        if (!token) {
            console.warn('Please add your token to JWPlayer.load()');
            return;
        }
        var script  = document.createElement('script');
        script.type = 'text/javascript';
        script.src  = '//content.jwplatform.com/libraries/' + token + '.js';
        document.head.appendChild(script);

        this._checkReady();
    });

    _this._checkReady = function () {
        var self       = this;
        var i          = 0;
        var checkReady = mtr.setInterval(function () {
            if (typeof jwplayer !== 'undefined') {
                self._loaded.set(true);
                mtr.clearInterval(checkReady);
            } else {
                i += 100;
                if (i > 5000) {
                    // stop checking if the lib isn't loaded within 5 secs
                    mtr.clearInterval(checkReady);
                    console.warn('Error loading JW Player from CDN');
                }
            }
        }, 100);
    };

    _this.loaded = function () {
        return this._loaded.get();
    };

    // Init only one once
    _this.init = function () {
        //...
    };

    // Meteor startup
    mtr.startup(function () {
        // ...
    });

    // Init
    if (!_this.is_init) {
        _this.init();
        _this.is_init = true;
    }

}(Meteor));
