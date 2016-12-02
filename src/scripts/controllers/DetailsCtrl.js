(function(){
'use strict';

var DetailsCtrl = function($scope, $http, $routeParams){

$http.get('json/data.json').success(function(response){
  $scope.talents = response;

 $scope.whichItem = $routeParams.itemId;
  for (var i = 0; i < response.length; i++) {
    if(response[i].photo === ""){
      response[i].photo = "default"; 
    }
  }//end for

 if($routeParams.itemId > 0 ){
  $scope.prevItem = Number($routeParams.itemId) -1;

 } else {
  $scope.prevItem = $scope.talents.length -1;
  }

  if($routeParams.itemId < $scope.talents.length-1){
  $scope.nextItem = Number($routeParams.itemId)+1;
 } else {
  $scope.nextItem = 0;
 }

});

};

module.exports = DetailsCtrl;

}());
