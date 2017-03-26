// Service Requests
angular.module('HypeMachine')
.factory('Request', function RequestFactory($http) {
	return {
		latest: function() {
			return $http({method: 'GET', url: 'https://api.hypem.com/playlist/loved/lun0/json/1'}); // request-latest
		},
		loved: function() {
			return $http({method: 'GET', url: 'https://api.hypem.com/playlist/obsessed/lun0/json/1'}); // request-loved
		},
		posted: function() {
			return $http({method: 'GET', url: 'https://api.hypem.com/playlist/feed/lun0/json/1'}); // request-posted
		}
	};
});