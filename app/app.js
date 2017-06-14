import appComponent from './app.component.js';
import padsComponent from './components/pads/pads.component';

angular.module('app', [])
.component('app', appComponent)
.component('pads', padsComponent)