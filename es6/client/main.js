import _ from 'underscore';

const JWPlayer_ = ((mtr) => {

    // ------------------------------------------------------------------------
    // Constants
    // ------------------------------------------------------------------------

    const VERSION = BasMTR.Utils.VERSION;

    // ------------------------------------------------------------------------
    // Vars
    // ------------------------------------------------------------------------

    let _loaded = new ReactiveVar(false);

    // ------------------------------------------------------------------------
    // Class Definition
    // ------------------------------------------------------------------------

    class JWPlayer_ {

        constructor() {

        }

        // Getters
        // ------------------------------------------------------------------------

        static get VERSION() {
            return VERSION;
        }

        static get loaded() {
            return _loaded.get();
        }

        static set loaded(value) {
            return _loaded.set(value);
        }

        static get load() {
            return _.once(function (token) {
                if (!token) {
                    console.warn('Please add your token to JWPlayer.load()');
                    return;
                }
                let script  = document.createElement('script');
                script.type = 'text/javascript';
                script.src  = '//content.jwplatform.com/libraries/' + token + '.js';
                document.head.appendChild(script);

                JWPlayer_._checkReady();
            });
        }

        // Public
        // ------------------------------------------------------------------------


        // Static
        // ------------------------------------------------------------------------


        // Static Private
        // ------------------------------------------------------------------------

        static _checkReady() {
            let self       = this;
            let i          = 0;
            let checkReady = mtr.setInterval(function () {
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
    }

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

})(Meteor);

BasMTR.JWPlayer = JWPlayer_;
export default JWPlayer_;
