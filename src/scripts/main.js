(function(){
'use strict';

var angular = require('angular'); 
var ngRoute = require('angular-route');


//controllers declaration
var TalentList = require('./controllers/TalentListCtrl');
var DetailTalent = require('./controllers/DetailsCtrl');
var TeamList = require('./controllers/TeamCtrl');


//Services declaration
var TalentServ = require('./services/TalentService');

//Directives declaration



var myApp = angular.module('myApp', [
	'ngRoute',
	'talentControllers'
]);

//configure partials
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/list', {
		templateUrl: 'partials/list.html',
		controller: 'TalentListCtrl'
	}).
	when('/details/:itemId', {
		templateUrl: 'partials/details.html',
		controller: 'DetailsCtrl'
		
	}).
	when('/teams', {
		templateUrl: 'partials/teams.html',
		controller: 'TeamCtrl'
	}).
	otherwise({redirectTo: '/list'});
}]);


var talentControllers = angular.module('talentControllers', []);

talentControllers.controller('TalentListCtrl', ['$scope', '$http', TalentList]);
talentControllers.controller('DetailsCtrl', ['$scope', '$http', '$routeParams', DetailTalent]);
talentControllers.controller('TeamCtrl', ['$scope', '$http', '$routeParams', TeamList]);


}());