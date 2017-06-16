import template from './search.html';
import controller from './search.controller';

let searchComponent = {
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs: '$ctrl'
};

export default searchComponent;