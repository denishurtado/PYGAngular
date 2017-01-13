(function(){
'use strict';

var gsap = require('gsap');

var IntroCtrl = function($scope){

	var x = document.getElementById('goToApp');
	var line = document.getElementById('line');
	var logo = document.getElementById('logo');
	
	var footer = document.getElementById('footer');
	var mountain = document.getElementById('mountain');

	var tl = new TimelineMax();
	tl.to(logo, 0.5, {opacity: 1})
	.to(line, 1, {width: "100%"})
	.to(mountain, 1, {top: -100, opacity: 1}, '-=1')
	.to(footer, 1, {height: 55}, '-=1');
	
};

module.exports = IntroCtrl;

}());