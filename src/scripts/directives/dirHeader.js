(function(){
'use strict';
// console.log("directive working");

var myHeaderDirective = function() {
	return {
		template: "<div class='header'>Header goes Here!</div>"
	};
};

module.exports = myHeaderDirective;

}());