import searchComponent from './search.component';

let searchModule = angular.module('search', [])
.component('search', searchComponent);

export default searchModule;