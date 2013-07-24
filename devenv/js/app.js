'use strict';


// Declare app level module which depends on filters, and services
angular.module('devEnv', ['myApp.filters', 'myApp.services', 'myApp.directives', 'devEnv.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/peopleList.html', controller: 'EmptyList'});
    $routeProvider.when('/view2', {templateUrl: 'partials/peopleList.html', controller: 'PeopleSample4'});
    $routeProvider.when('/view3', {templateUrl: 'partials/peopleList.html', controller: 'NegativePeople'});
    $routeProvider.when('/view4', {templateUrl: 'partials/peopleList.html', controller: 'LongList'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
