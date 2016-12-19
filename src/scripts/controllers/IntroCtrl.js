(function(){
'use strict';

var gsap = require('gsap');

var IntroCtrl = function($scope){

	var x = document.getElementById('goToApp');
	var line = document.getElementById('line');
	var logo = document.getElementById('logo');
	var iso = document.getElementById('isotype');
	var footer = document.getElementById('footer');
	var mountain = document.getElementById('mountain');

	var tl = new TimelineMax();
	tl.to(logo, 0.5, {opacity: 1})
	.to(line, 1, {width: "100%"})
	.to(iso, 1, {left: -88}, '-=1')
	.to(mountain, 1, {top: -33, opacity: 1}, '-=1')
	.to(footer, 1, {height: 55}, '-=1');
	
	//TweenMax.to(iso, 4, {rotation:360, repeat:-1, transformOrigin:"0% 0%", ease:Linear.easeNone})	//hide intro
	
	function hideIntro(){
		document.getElementById('intro').style.display = "none";
	}
	x.addEventListener('click', hideIntro);
};

module.exports = IntroCtrl;

}());