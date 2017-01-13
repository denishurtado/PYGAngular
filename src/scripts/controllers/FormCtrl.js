(function(){
'use strict';

console.log("form working");

var FormCtrl = function($scope, $http){

	//get
	function getMessage(){

		$http.get('http://localhost:5000/api/message').then(function(result){
			$scope.messages = result.data;
			console.log($scope.messages);	 
		});
	}
	getMessage();

	//get by id
	function getMessageById(){

		$http.get('http://localhost:5000/api/message/' + $scope.messageById).then(function(result){
			$scope.result = result.data;
			console.log(result.data);
		});
	}
	document.getElementById("getById").addEventListener("click", getMessageById);

	//post
	function postMessage(){
		$http.post('http://localhost:5000/api/message', {msg: $scope.message}).then(function(){
			getMessage();
		});
		console.log("post");
		
		
	}
	document.getElementById("post").addEventListener("click", postMessage);

	//delete all messages
	function deleteMessages(){
		$http.delete('http://localhost:5000/api/message/').then(function(result){
			getMessage();
			console.log("delete messages", result.data);
		});
		
	}

	document.getElementById("delete").addEventListener("click", deleteMessages);

	//delete by Id
	function deleteMessageById(){
		$http.delete('http://localhost:5000/api/message/' + $scope.messageId).then(function(result){
			getMessage();
			console.log("delete messages", result.data);
		});
		
	}

	document.getElementById("deleteById").addEventListener("click", deleteMessageById);
	
	//Update
	function updateMessageById(){
		$http.put('http://localhost:5000/api/message/' + $scope.msgId, {msg: $scope.msgUpdate}).then(function(result){
			getMessage();
			console.log("update messages", result.data);
		});
		
	}

	document.getElementById("update").addEventListener("click", updateMessageById);
};

module.exports = FormCtrl;

}());