// Route
angular.module('HypeMachine')
.config(function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'templates/latest/index.html', // latest section
			controller: 'RequestLatestController'
			//controllerAs: 'LatesController' // alias
		})
		.when('/loved', {
			templateUrl: 'templates/loved/index.html', // loved section
			controller: 'RequestLovedController'
		})
		.when('/posted', {
			templateUrl: 'templates/posted/index.html', // posted section
			controller: 'RequestPostedController'
		})
});