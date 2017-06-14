import template from './pads.html';
import controller from './pads.controller';

controller.$inject = ['$rootScope', '$interval'];

let padsComponent = {
	template,
	controller
};

export default padsComponent;