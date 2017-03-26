angular.module('HypeMachine')
.controller('RequestLatestController', function($scope, Request) {
    Request.latest()
  .then(function(data) {
    $scope.requests = data.data;
    //console.log($scope.requests);
  });
});