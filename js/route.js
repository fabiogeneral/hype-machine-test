angular.module('HypeMachine')
.config(function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'templates/latest/index.html',
			controller: 'RequestLatestController'
			//controllerAs: 'LatesController' // alias
		})
		.when('/loved', {
			templateUrl: 'templates/loved/index.html',
			controller: 'RequestLovedController'
		})
		.when('/posted', {
			templateUrl: 'templates/posted/index.html',
			controller: 'RequestPostedController'
		})
});