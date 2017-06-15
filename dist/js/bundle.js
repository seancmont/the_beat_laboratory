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

_app4.default.$inject = ['$rootScope', '$interval'];

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

var appCtrl = function appCtrl($rootScope, $interval) {
	_classCallCheck(this, appCtrl);

	var ctrl = this;
};

exports.default = appCtrl;

},{}],3:[function(require,module,exports){
module.exports = "<h1>Heyyyy</h1>\n<pads></pads>";

},{}],4:[function(require,module,exports){
'use strict';

var _appComponent = require('./app.component.js');

var _appComponent2 = _interopRequireDefault(_appComponent);

var _pads = require('./components/pads/pads.component');

var _pads2 = _interopRequireDefault(_pads);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('app', []).component('app', _appComponent2.default).component('pads', _pads2.default);

},{"./app.component.js":1,"./components/pads/pads.component":5}],5:[function(require,module,exports){
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
	controller: ['$rootScope', '$interval', _pads4.default],
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
    function padsCtrl($rootScope, $interval) {
        _classCallCheck(this, padsCtrl);

        var ctrl = this;
        ctrl.title = 'the pads go here';
        ctrl.pads = [];
        ctrl.keys = [65, 83, 68, 70, 90, 88, 67, 86];

        window.addEventListener('keydown', function (e) {
            //console.log('poopy');
            console.log(e.keyCode);

            ctrl.pads.find(function (pad) {
                pad.keycode === e.keyCode ? pad.sound.play() : null;
            });
        });

        ctrl.soundsBasic = [];

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

        for (var i = 0; i < 8; i++) {
            ctrl.pads.push({
                'id': i + 1,
                'keycode': ctrl.keys[i],
                'sound': ctrl.soundsBasic[i]
            });
        }
    }

    _createClass(padsCtrl, [{
        key: 'hello',
        value: function hello() {
            console.log('hello world');
        }
    }]);

    return padsCtrl;
}();

exports.default = padsCtrl;

},{}],7:[function(require,module,exports){
module.exports = "<p>pads go here</p>\n<h1>{{$ctrl.title}}</h1>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-6 col-md-3\" ng-repeat=\"pad in $ctrl.pads\">\n            <button type=\"button\" class=\"btn btn-primary pad\" ng-click=\"pad.sound.play()\">{{pad.id}}</button>\n        </div>\n    </div>\n</div>\n";

},{}]},{},[4]);
