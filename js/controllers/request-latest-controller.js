// Controller to Latest Section
angular.module('HypeMachine')
.controller('RequestLatestController', function($scope, Request) {
  Request.latest()
  .then(function(data) {
    // Passing API object to array
    var inputObj = data.data; // object
		var output = []; // array
		for (var key in inputObj) {
			// Taking out the "version" Object key of API page
		  if (key < 40) { // length of each API page
		  	output.push(inputObj[key]); // put inside of array
		  }
		}
		// Requests
		$scope.requests = output;
  });
});