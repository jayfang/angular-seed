'use strict';


// Declare app level module which depends on filters, and services
angular.module('devEnv', ['myApp.filters', 'myApp.services', 'myApp.directives', 'playerdeck.controllers', 'devEnv.controllers']).
config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: '../devenv/partials/roomEmpty.html'
        });
        $routeProvider.when('/view2', {
            templateUrl: '../devenv/partials/roomInProgress.html'
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
