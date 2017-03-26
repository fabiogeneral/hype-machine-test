angular.module('HypeMachine')
.controller('RequestLovedController', function($scope, Request) {
	Request.loved()
  .then(function(data) {
    $scope.requests = data.data;
  });
});