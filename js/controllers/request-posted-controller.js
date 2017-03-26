// Controller to Posted Section
angular.module('HypeMachine')
.controller('RequestPostedController', function($scope, Request) {
  Request.posted()
  .then(function(data) {
    //$scope.requests = data.data;
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
		//consoling
		console.log('Input ---->', data.data);
		console.log('===========');
		console.log('Array ---->', output);
		console.log('===========');
    console.log('Each Object ---->', output[0]);
  });
});