import padsComponent from './pads.component';

let padsModule = angular.module('pads', [])
.component('pads', padsComponent);

export default padsModule;