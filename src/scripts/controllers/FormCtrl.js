(function(){
'use strict';

console.log("form working");

var FormCtrl = function($scope, $http){

	//get
	function getMessage(){

		$http.get('http://localhost:5000/api/message').then(function(result){
			$scope.messages = result.data;	 
		});
	}
	getMessage();

	//get by id
	function getMessageById(){

		$http.get('http://localhost:5000/api/message/'+$scope.messageById).then(function(result){
			$scope.result = result.data;
			console.log(result.data);
		});
	}
	document.getElementById("getById").addEventListener("click", getMessageById);

	//post
	function postMessage(){
		$http.post('http://localhost:5000/api/message', {msg: $scope.message});
		console.log("post");
		
	}
	document.getElementById("post").addEventListener("click", postMessage);

	//delete all messages
	function deleteMessages(){
		$http.delete('http://localhost:5000/api/message/').then(function(result){
			console.log("delete messages", result.data);
		});
		
	}

	document.getElementById("delete").addEventListener("click", deleteMessages);

	//delete by Id
	function deleteMessageById(){
		$http.delete('http://localhost:5000/api/message/'+$scope.messageId).then(function(result){
			console.log("delete messages", result.data);
		});
		
	}

	document.getElementById("deleteById").addEventListener("click", deleteMessageById);
	
};

module.exports = FormCtrl;

}());