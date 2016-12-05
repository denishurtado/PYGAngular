(function(){
'use strict';
console.log("team list working");

var TeamCtrl = function($scope, $http, $routeParams) {
	$http.get('json/teams.json').success(function(response){
		$scope.teamList = response;	  
		for (var i = 0; i < response.length; i++) {
			console.log('teams:' + response[i].name);
		}//end for 
	});//end http
};

module.exports = TeamCtrl;

}());