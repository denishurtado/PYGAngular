(function() {
  'use strict';

  var TeamDetailsCtrl = function($scope, $http, $routeParams) {

    $http.get('json/teams.json').success(function(response) {
      $scope.teams = response;

      $scope.whichItem = $routeParams.itemId;
      for (var i = 0; i < response.length; i++) {
        if (response[i].photo === "") {
          response[i].photo = "default";
        }
      } //end for

      if ($routeParams.itemId > 0) {
        $scope.prevItem = Number($routeParams.itemId) - 1;

      } else {
        $scope.prevItem = $scope.teams.length - 1;
      }

      if ($routeParams.itemId < $scope.teams.length - 1) {
        $scope.nextItem = Number($routeParams.itemId) + 1;
      } else {
        $scope.nextItem = 0;
      }

    });

  };

  module.exports = TeamDetailsCtrl;

}());
