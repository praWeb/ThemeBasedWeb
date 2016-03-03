var routes = angular.module("routes",['ngRoute']);

routes.config(['$routeProvider', function($routeProvider){

$routeProvider.
	/*have to configure controller loading to avoid multiple controll calls*/
	when("/:pageName",{
		"templateUrl" : 'basic-layout.html',
		"controller" : "GetPersonDetails"
	}).otherwise({redirectTo:'/home'});

}]);