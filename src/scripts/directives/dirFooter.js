(function(){
'use strict';

var myFooterDirective = function() {
	return {
		restrict: 'E',
		scope: false,
		templateUrl: 'partials/widgets/footer.html'
	};
};

module.exports = myFooterDirective;

}());