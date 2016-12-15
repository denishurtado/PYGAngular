(function(){
  
'use strict';

var TalentListCtrl = function($scope, $http) {

$http.get('json/data.json').success(function(response){
  $scope.talents = response;
  
	for (var i = 0; i < response.length; i++) {
		if(response[i].photo === ""){
			response[i].photo = "default";
		}
		
	}//end for

});
};

module.exports = TalentListCtrl;

}());