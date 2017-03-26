angular.module('HypeMachine')
.controller('RequestPostedController', function($scope, Request) {
  Request.posted()
  .then(function(data) {
    $scope.requests = data.data;
  });
});