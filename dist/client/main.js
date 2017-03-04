'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JWPlayer_ = function (mtr) {

    // ------------------------------------------------------------------------
    // Constants
    // ------------------------------------------------------------------------

    var VERSION = BasMTR.Utils.VERSION;

    // ------------------------------------------------------------------------
    // Vars
    // ------------------------------------------------------------------------

    var _loaded = new ReactiveVar(false);

    // ------------------------------------------------------------------------
    // Class Definition
    // ------------------------------------------------------------------------

    var JWPlayer_ = function () {
        function JWPlayer_() {
            _classCallCheck(this, JWPlayer_);
        }

        // Getters
        // ------------------------------------------------------------------------

        _createClass(JWPlayer_, null, [{
            key: '_checkReady',


            // Public
            // ------------------------------------------------------------------------


            // Static
            // ------------------------------------------------------------------------


            // Static Private
            // ------------------------------------------------------------------------

            value: function _checkReady() {
                var self = this;
                var i = 0;
                var checkReady = mtr.setInterval(function () {
                    if (typeof jwplayer !== 'undefined') {
                        self.loaded = true;
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
            }
        }, {
            key: 'VERSION',
            get: function get() {
                return VERSION;
            }
        }, {
            key: 'loaded',
            get: function get() {
                return _loaded.get();
            },
            set: function set(value) {
                return _loaded.set(value);
            }
        }, {
            key: 'load',
            get: function get() {
                return _underscore2.default.once(function (token) {
                    if (!token) {
                        console.warn('Please add your token to JWPlayer.load()');
                        return;
                    }
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = '//content.jwplatform.com/libraries/' + token + '.js';
                    document.head.appendChild(script);

                    JWPlayer_._checkReady();
                });
            }
        }]);

        return JWPlayer_;
    }();

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    // Methods


    mtr.methods({
        //...
    });

    // ------------------------------------------------------------------------
    // Meteor
    // ------------------------------------------------------------------------

    // Meteor startup
    mtr.startup(function () {
        //...
    });

    return JWPlayer_;
}(Meteor);

BasMTR.JWPlayer = JWPlayer_;
exports.default = JWPlayer_;
