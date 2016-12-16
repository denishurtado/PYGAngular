(function(){
'use strict';

var IntroCtrl = function($scope){
	var x = document.getElementById('goToApp');
	
	function hideIntro(){
		document.getElementById('intro').style.display = "none";
	}
	x.addEventListener('click', hideIntro);
};

module.exports = IntroCtrl;

}());