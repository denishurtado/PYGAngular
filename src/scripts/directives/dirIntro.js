(function(){
'use strict';

var myIntroDirective = function() {
	return {
		restrict: 'E',
		scope: false,
		templateUrl: 'partials/widgets/intro.html'
	};
};


module.exports = myIntroDirective;

}());