// Service Requests
angular.module('HypeMachine')
.factory('Request', function RequestFactory($http) {
	return {
		latest: function() {
			return $http({method: 'GET', url: 'https://api.hypem.com/playlist/history/lun0/json/1'}); // request-latest
		},																// supposing that the request was about the last tracks heard by the user - listening history
		loved: function() {
			return $http({method: 'GET', url: 'https://api.hypem.com/playlist/loved/lun0/json/1'}); // request-loved
		},																// Supposing that the request are those marked by the user as loved - favorites
		posted: function() {
			return $http({method: 'GET', url: 'https://api.hypem.com/playlist/feed/lun0/json/1'}); // request-posted
		}																	// Supposing that the request was about the user feed
	};
});