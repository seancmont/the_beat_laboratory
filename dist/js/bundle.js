(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _app = require('./app.html');

var _app2 = _interopRequireDefault(_app);

var _app3 = require('./app.controller');

var _app4 = _interopRequireDefault(_app3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app4.default.$inject = ['$rootScope', '$interval', '$timeout'];

var appComponent = {
	template: _app2.default,
	controller: _app4.default
};

exports.default = appComponent;

},{"./app.controller":2,"./app.html":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var appCtrl = function appCtrl($rootScope, $interval, $timeout) {
	_classCallCheck(this, appCtrl);

	var ctrl = this;
};

exports.default = appCtrl;

},{}],3:[function(require,module,exports){
module.exports = "<div class=\"container-fluid topView\">\n<h1><i class=\"fa fa-flask\" aria-hidden=\"true\"></i> The Beat Laboratory <i class=\"fa fa-flask\" aria-hidden=\"true\"></i></h1>\n<search></search>\n</div>\n<pads></pads>";

},{}],4:[function(require,module,exports){
'use strict';

var _appComponent = require('./app.component.js');

var _appComponent2 = _interopRequireDefault(_appComponent);

var _pads = require('./components/pads/pads.component');

var _pads2 = _interopRequireDefault(_pads);

var _search = require('./components/search/search.component');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('app', []).component('app', _appComponent2.default).component('pads', _pads2.default).component('search', _search2.default);

},{"./app.component.js":1,"./components/pads/pads.component":5,"./components/search/search.component":8}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pads = require('./pads.html');

var _pads2 = _interopRequireDefault(_pads);

var _pads3 = require('./pads.controller');

var _pads4 = _interopRequireDefault(_pads3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var padsComponent = {
	template: _pads2.default,
	controller: ['$rootScope', '$interval', '$timeout', _pads4.default],
	controllerAs: '$ctrl'
};

exports.default = padsComponent;

},{"./pads.controller":6,"./pads.html":7}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var padsCtrl = function () {
    function padsCtrl($rootScope, $interval, $timeout) {
        _classCallCheck(this, padsCtrl);

        var ctrl = this;
        ctrl.rootScope = $rootScope;
        ctrl.timeout = $timeout;

        // This is a global array that will hold our pads and make them available in other components
        ctrl.rootScope.pads = [];

        // This is an array of keyboard keycodes which we will use to set our pads reaction to
        ctrl.keys = [65, 83, 68, 70, 90, 88, 67, 86];

        ctrl.keyMap = {
            '65': false,
            '83': false,
            '68': false,
            '70': false,
            '90': false,
            '88': false,
            '67': false,
            '86': false,
            '16': false

            // Here we attach an event listener to the page that continuously listen for any keypress
        };window.addEventListener('keydown', function (e) {
            //console.log(e.keyCode);
            console.log('e.keyCode ' + e.keyCode);
            console.log('keyMap ' + ctrl.keyMap[e.keyCode]);
            ctrl.keyMap[e.keyCode] = true;
            console.log('keyMap ' + ctrl.keyMap[e.keyCode]);

            // Here we search through all of our pads and look for any of their assigned keycodes
            ctrl.rootScope.pads.find(function (pad) {

                if (ctrl.keyMap[pad.keycode] === true && ctrl.keyMap[16] === false) {
                    pad.sound.play();
                } else if (ctrl.keyMap[pad.keycode] === true && ctrl.keyMap[16] === true) {
                    pad.sound.stop();
                }
            });
        });

        window.addEventListener('keyup', function (e) {
            //console.log(e.keyCode);
            console.log('e.keyCode ' + e.keyCode);
            console.log('keyMap ' + ctrl.keyMap[e.keyCode]);
            ctrl.keyMap[e.keyCode] = false;
            console.log('keyMap ' + ctrl.keyMap[e.keyCode]);
        });

        // // Here we attach an event listener to the page that continuously listen for any keypress
        // window.addEventListener('keydown', function(e) {
        //     //console.log(e.keyCode);

        //     // Here we search through all of our pads and look for any of their assigned keycodes
        //     ctrl.rootScope.pads.find(function(pad) {


        //         // If the key pressed matches the pads keycode, play the pad sound
        //         pad.keycode === e.keyCode ? pad.sound.play() : null;

        //     });

        // });


        // This array will hold our initially loaded, vanilla sounds
        ctrl.soundsBasic = [];

        // Here are the eight initial sounds, initialzed as Howls from HowlerJS
        ctrl.soundsBasic.push(new Howl({
            src: ['./app/assets/sounds/percussion/clap-tape.wav']
        }));

        ctrl.soundsBasic.push(new Howl({
            src: ['./app/assets/sounds/percussion/crash-tape.wav']
        }));

        ctrl.soundsBasic.push(new Howl({
            src: ['./app/assets/sounds/percussion/hihat-acoustic01.wav']
        }));

        ctrl.soundsBasic.push(new Howl({
            src: ['./app/assets/sounds/percussion/kick-oldschool.wav']
        }));

        ctrl.soundsBasic.push(new Howl({
            src: ['./app/assets/sounds/percussion/ride-acoustic02.wav']
        }));

        ctrl.soundsBasic.push(new Howl({
            src: ['./app/assets/sounds/percussion/snare-acoustic02.wav']
        }));

        ctrl.soundsBasic.push(new Howl({
            src: ['./app/assets/sounds/percussion/tom-808.wav']
        }));

        ctrl.soundsBasic.push(new Howl({
            src: ['./app/assets/sounds/percussion/tom-rototom.wav']
        }));

        // Here we create eight pad objects.
        // Each pad has an id number, a keyboard activation keycode, and a sound
        for (var i = 0; i < 8; i++) {
            ctrl.rootScope.pads.push({
                'id': i + 1,
                'keycode': ctrl.keys[i],
                'volume': 100,
                'start': 0,
                'end': 100,
                'length': 0,
                'loop': false,
                'sound': ctrl.soundsBasic[i]
            });
            console.log(ctrl.soundsBasic[i]._duration);
        }
    }

    //This function is called when the user hits the "add sound" button from sounds they searched


    _createClass(padsCtrl, [{
        key: 'loadPad',
        value: function loadPad(pad) {
            var ctrl = this;

            // We only want to override the pad's sound if newSnd isn't empty
            if (ctrl.rootScope.newSnd != null) {
                pad.sound = ctrl.rootScope.newSnd;
                pad.start = 0;
                pad.end = 100;
                pad.length = pad.sound._sprite.__default[1];
                pad.loop = false;
            } else {
                console.log('Nothing to load');
            }
        }

        // This function is called when user clicks on a pad

    }, {
        key: 'playPad',
        value: function playPad(pad) {
            var ctrl = this;
            console.log(pad);
            console.log(pad.sound._sprite.__default[0]);
            // pad.sound._sprite.__default[0] += 10;
            // console.log(pad.sound._sprite.__default[0]);
            // This will stop the sound if it is already playing and then start it again
            pad.sound.stop();
            pad.sound.play();
        }
    }, {
        key: 'setVolume',
        value: function setVolume(pad) {
            var ctrl = this;

            //console.log('pad Vol ' + pad.volume);

            pad.sound.volume(pad.volume * 0.01);
        }
    }, {
        key: 'setStart',
        value: function setStart(pad) {
            var ctrl = this;

            pad.length = pad.sound._duration * 1000;
            //console.log('pad length' + pad.length);

            pad.sound._sprite.__default[0] = pad.length * (pad.start / 100);
        }
    }, {
        key: 'setEnd',
        value: function setEnd(pad) {
            var ctrl = this;

            pad.length = pad.sound._duration * 1000;
            //console.log('pad length' + pad.length);

            pad.sound._sprite.__default[1] = pad.length * (pad.end / 100);
        }
    }]);

    return padsCtrl;
}();

exports.default = padsCtrl;

},{}],7:[function(require,module,exports){
module.exports = "<div class=\"container-fluid padsComponent\">\n    <div class=\"row\">\n        <div class=\"col-xs-6 col-md-3\" ng-repeat=\"pad in $ctrl.rootScope.pads\">\n            <button type=\"button\" class=\"btn btn-primary pad\" ng-click=\"$ctrl.playPad(pad)\">{{pad.id}}\n            </button>\n            <br>\n            <input type=\"range\" value=\"100\" ng-change=\"$ctrl.setVolume(pad)\" ng-model=\"pad.volume\">\n            <p>Volume: {{pad.volume}}</p>\n            <input type=\"range\" value=\"0\" ng-change=\"$ctrl.setStart(pad)\" ng-model=\"pad.start\">\n            <p>Start: {{pad.sound._sprite.__default[0]}}</p>\n            <input type=\"range\" value=\"100\" ng-change=\"$ctrl.setEnd(pad)\" ng-model=\"pad.end\">\n            <p>End: {{pad.sound._sprite.__default[1]}}</p>\n            <label class=\"btn btn-primary\">\n                <input type=\"checkbox\" autocomplete=\"off\" ng-model=\"pad.sound._loop\"> Loop\n            </label>\n            <a type=\"button\" class=\"btn btn-primary pull-right glyphicon glyphicon-plus padMenuButton\" ng-click=\"$ctrl.loadPad(pad)\">&nbsp{{pad.id}}</a>\n        </div>\n    </div>\n</div>\n";

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _search = require('./search.html');

var _search2 = _interopRequireDefault(_search);

var _search3 = require('./search.controller');

var _search4 = _interopRequireDefault(_search3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchComponent = {
	template: _search2.default,
	controller: ['$rootScope', '$interval', '$timeout', _search4.default],
	controllerAs: '$ctrl'
};

exports.default = searchComponent;

},{"./search.controller":9,"./search.html":10}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var searchCtrl = function () {
    function searchCtrl($rootScope, $interval, $timeout) {
        _classCallCheck(this, searchCtrl);

        var ctrl = this;
        ctrl.rootScope = $rootScope;
        ctrl.timeout = $timeout;
        ctrl.interval = $interval;

        // // Our freesound api key
        freesound.setToken(config.freesoundToken);

        // search holds the value of our search input
        ctrl.search = "";

        // soundList will hold the freesound ids, audio, and other info
        // as we fetch them with our readSoundId function later
        ctrl.soundList = [];

        // newSnd is a global variable that we will use to load a sound into the pad our user selects
        // We add rootScope to this variable so that we can pass it to or pads component
        ctrl.rootScope.newSnd = null;

        // We define a variable to tell if we are currently loading sounds from the api
        // Once finished we can display sounds
        ctrl.loadingSounds = false;
    }

    // We use searchSound to query the freesound api for sounds with a user input string


    _createClass(searchCtrl, [{
        key: 'searchSound',
        value: function searchSound() {
            var ctrl = this;

            // Before searching for new sounds, we will clear out all of the previously searched sounds
            // from our array
            ctrl.soundList = [];

            // We will also clear out our previously loaded sound
            ctrl.rootScope.newSnd = null;

            console.log('fetching sound ids...'

            // Once we begin fetching sounds from freesound, we set loading to true
            );ctrl.loadingSounds = true;
            console.log('loading? ' + ctrl.loadingSounds);

            // query is defined by whatever the user inputs into our search bar on the main view
            var query = ctrl.search;

            // This variable will control how many sounds we want to fetch
            // It is used in the for loop below
            var resultsNum = 12;

            // The next three variables we will use to sort through freesound's api
            var page = 1;
            var filter = "duration: [* TO *]";
            var sort = "score";

            // Freesound gives us this function to search their api with text input
            // It takes in a string "query", page number, and sort option
            freesound.textSearch(query, { page: page, filter: filter, sort: sort }, function (sounds) {

                for (var i = 0; i < resultsNum; i++) {

                    // Here we create a temporary variable, snd, to store the freesound sound information  
                    var snd = sounds.getSound(i);

                    // Then we log the sounds name and id
                    console.log(snd.name + ' ' + snd.id);

                    // Here we create a new sound object with all of its info from freesounds api
                    // And we push it into our empty container to be used again in the readSoundId function below
                    ctrl.soundList.push({ "name": snd.name, "id": snd.id, "image": null, "soundFile": null });

                    // This is where we jump into our next function and attach the fetched audio file to our soundList object
                    ctrl.readSoundId(ctrl.soundList[i].id, i);

                    console.log('searchlist ' + i + ': ' + snd.name + ' - ' + ctrl.soundList[i].id);
                }

                console.log('Done fetching all sounds');

                // Once we're finished fetching and loading sounds we set loading to false
                ctrl.timeout(function () {
                    ctrl.loadingSounds = false;
                    console.log('loading? ' + ctrl.loadingSounds);
                }, 3000);
            }, function () {
                console.log("Error while searching...");
            });
        }

        // We use readSoundId to actually capture the freesound audio, storing it in the memory of our browser page

    }, {
        key: 'readSoundId',
        value: function readSoundId(id, i) {
            var ctrl = this;
            console.log('reading sound Ids...');

            freesound.getSound(id, function (sound) {

                // Here is where we convert our fetched audio file into a HowlerJS audio file
                // This is so that we can have access to simple Howler function and edit our aduio more easily later on
                ctrl.soundList[i].soundFile = new Howl({
                    src: [sound.previews['preview-hq-mp3']]
                });
                console.log('new sound ' + ctrl.soundList[i].soundFile);

                ctrl.soundList[i].image = sound.images.waveform_m;
                console.log('new sound img ' + ctrl.soundList[i].image);
            });
        }

        // loadSound is called any time the user clicks on a fetched sound.
        // This sends the audio file into a global variable, newSnd, which isd hooked up to our pads component
        // so that we can attach the new sound where we like.

    }, {
        key: 'loadSound',
        value: function loadSound(sound) {
            var ctrl = this;

            console.log(sound);

            // Set our global variable equal to the sound button that is clicked
            ctrl.rootScope.newSnd = sound.soundFile;

            console.log(ctrl.rootScope.newSnd);

            // We will also play the sound when button is clicked.
            // However if the sound is already playing we will set it to stop when clicked again
            if (ctrl.rootScope.newSnd.playing()) {
                ctrl.rootScope.newSnd.stop();
            } else {
                ctrl.rootScope.newSnd.play();
            }
        }
    }]);

    return searchCtrl;
}();

exports.default = searchCtrl;

},{}],10:[function(require,module,exports){
module.exports = "<!-- <div class=\"container-fluid\">\n<div class=\"col-lg-6\">\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" ng-model=\"$ctrl.search\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-secondary\" type=\"button\" ng-click=\"$ctrl.searchSound()\">Go!</button>\n\n      </span>\n    </div>\n  </div>\n</div> -->\n\n<div class=\"container-fluid search\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n       <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Browse chemicals...\" ng-model=\"$ctrl.search\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-secondary\" type=\"button\" ng-click=\"$ctrl.searchSound()\"><i class=\"fa fa-refresh fa-spin\" ng-show=\"$ctrl.loadingSounds\"></i> Boil<i class=\"fa fa-fire\" aria-hidden=\"true\"></i></button>\n      </span>\n    </div>\n    </div>\n  </div>\n  <div class=\"row\">\n  <div class=\"col-xs-6 col-sm-2\" ng-repeat=\"sound in $ctrl.soundList\">\n   <button class=\"btn btn-primary\" ng-click=\"$ctrl.loadSound(sound)\"> {{sound.name}}</button>\n   <img src=\"{{sound.image}}\" alt=\"{{sound.name}} waveform\">\n  </div>\n  </div>\n\n</div>";

},{}]},{},[4]);
