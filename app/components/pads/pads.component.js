import template from './pads.html';
import controller from './pads.controller';

let padsComponent = {
	template,
	controller: ['$rootScope', '$interval', '$timeout', controller],
	controllerAs: '$ctrl'
};

export default padsComponent;