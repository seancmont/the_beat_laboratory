import appComponent from './app.component.js';
import padsComponent from './components/pads/pads.component';
import searchComponent from './components/search/search.component';

angular.module('app', [])
.component('app', appComponent)
.component('pads', padsComponent)
.component('search', searchComponent)