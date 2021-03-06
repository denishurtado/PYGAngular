(function(){
'use strict';

var angular = require('angular'); 
var ngRoute = require('angular-route');


//controllers declaration
var TalentList = require('./controllers/TalentListCtrl');
var DetailTalent = require('./controllers/DetailsCtrl');
var TeamList = require('./controllers/TeamCtrl');
var DetailTeam = require('./controllers/TeamDetailsCtrl');

//Services declaration
var TalentServ = require('./services/TalentService');

//Directives declaration
var Header = require('./directives/dirHeader');
var Footer = require('./directives/dirFooter');
var Intro = require('./directives/dirIntro');

//Main module
var myApp = angular.module('myApp', [
	'ngRoute',
	'appHandler'
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
	when('/teamDetails/:itemId', {
		templateUrl: 'partials/teamDetails.html',
		controller: 'TeamDetailsCtrl'
	}).
	otherwise({redirectTo: '/list'});
}]);



var appHandler = angular.module('appHandler', []);

// Controllers
appHandler.controller('TalentListCtrl', ['$scope', '$http', TalentList]);
appHandler.controller('DetailsCtrl', ['$scope', '$http', '$routeParams', DetailTalent]);
appHandler.controller('TeamCtrl', ['$scope', '$http', '$routeParams', TeamList]);
appHandler.controller('TeamDetailsCtrl', ['$scope', '$http', '$routeParams', DetailTeam]);

// Directives
appHandler.directive("appHeader", Header);
appHandler.directive("appFooter", Footer);
appHandler.directive("appIntro", Intro);

}());