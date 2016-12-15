(function(){
'use strict';
// console.log("directive working");

var myHeaderDirective = function() {
	return {
		restrict: 'E',
		scope: false,
		templateUrl: 'partials/widgets/header.html'
	};
};

module.exports = myHeaderDirective;

}());