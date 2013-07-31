'use strict';


// Declare app level module which depends on filters, and services
angular.module('devEnv', ['myApp.filters', 'myApp.services', 'myApp.directives', 'playerdeck.controllers']).
config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: '../app/partials/deckList.html',
            controller: 'deck'
        });
        $routeProvider.when('/view2', {
            templateUrl: '../app/partials/deckList.html',
            controller: 'deckVoted1st'
        });
        $routeProvider.otherwise({
            redirectTo: '/view1'
        });
    }
]);
/*
$scope.$watch(function() { return $location.path(); }, function(newValue, oldValue){  
	console.log( 'Old path:' + oldValue + ' New path:' + newValue);
});

*/
