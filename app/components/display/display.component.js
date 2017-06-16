import template from './display.html';
import controller from './display.controller';

let displayComponent = {
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs: '$ctrl'
};

export default displayComponent;