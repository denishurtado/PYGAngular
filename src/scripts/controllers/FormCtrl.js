(function(){
'use strict';

console.log("form working");

var FormCtrl = function($scope, $http){

	//get
	function getMessage(){

		$http.get('http://localhost:5000/api/message').then(function(result){
			console.log(result.data);
			$scope.messages = result.data;	 
		});
	}
	getMessage();

	//post
	function postMessage(){
		$http.post('http://localhost:5000/api/message', {msg: $scope.message});
		console.log("post");
		getMessage();
	}
	document.getElementById("post").addEventListener("click", postMessage);

	
};

module.exports = FormCtrl;

}());