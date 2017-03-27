// Controller to Posted Section
angular.module('HypeMachine')
.controller('RequestPostedController', function($scope, $http) {
	var output = []; // empty array
	for (var pages = 1; pages < 5; pages++) { // range of API pages (.length?)
		//I limited the number of pages because if I request the API link many times, it drops the server
	  $http.get('https://api.hypem.com/playlist/feed/lun0/json/' + pages)
	  // Supposing that the request was about the user feed
	  .then(function(data) {
	    // Passing API object to array
	    var inputObj = data.data; // object
	    if (i == undefined) {
	    	var i = 0; // just the 1st time
	    }
			for (var key in inputObj) {
				// Taking out the "version" Object key of API page
			  if (key < 40) { // length of each API page
			  	output.push(inputObj[i]); // put inside of array
			  }
			  i++; // next index
			}
			// Requests
			$scope.requests = output;
			//consoling
			//console.log('Input ---->', data.data);
			//console.log('===========');
			//console.log('Array ---->', output);
			//console.log('===========');
    	//console.log('Each Object ---->', output[0]);
	  });
	}
});