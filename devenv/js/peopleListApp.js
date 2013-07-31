'use strict';


// Declare app level module which depends on filters, and services
angular.module('devEnv', ['myApp.filters', 'myApp.services', 'myApp.directives', 'devEnv.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: '../app/partials/peopleList.html', controller: 'EmptyList'});
    $routeProvider.when('/view2', {templateUrl: '../app/partials/peopleList.html', controller: 'PeopleFromService'});
    $routeProvider.when('/view3', {templateUrl: '../app/partials/peopleList.html', controller: 'NegativePeople'});
    $routeProvider.when('/view4', {templateUrl: '../app/partials/peopleList.html', controller: 'LongList'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
/*
$scope.$watch(function() { return $location.path(); }, function(newValue, oldValue){  
	console.log( 'Old path:' + oldValue + ' New path:' + newValue);
});

*/