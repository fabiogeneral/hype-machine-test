// Controller to Loved Section
angular.module('HypeMachine')
.controller('RequestLovedController', function($scope, Request) {
  Request.loved()
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