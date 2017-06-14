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

_pads4.default.$inject = ['$rootScope', '$interval'];

var padsComponent = {
	template: _pads2.default,
	controller: _pads4.default
};

exports.default = padsComponent;

},{"./pads.controller":6,"./pads.html":7}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var padsCtrl = function padsCtrl($rootScope, $interval) {
	_classCallCheck(this, padsCtrl);

	var ctrl = this;
	ctrl.title = 'the pads go here';
};

exports.default = padsCtrl;

},{}],7:[function(require,module,exports){
module.exports = "<p>pads go here</p>";

},{}]},{},[4]);
