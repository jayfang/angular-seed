'use strict';

/* Controllers */

angular.module('devEnv.controllers', []).
// Development environment controller
  controller('DevEnvironment', ['$scope', function(sc) {
  	//JDA not used   	// sc.topName = 'DevEnvironment::TopName';
  }])
// Application Test Controllers
  .controller('EmptyList', ['$scope', 'roomState', function(sc, rs) {  
  	sc.present = [];
  	sc.addUser = function() {
  		console.log('sc.addUser  sc=' + sc.TopName);
  		sc.present.push('Jan');
  	};
  	sc.$on( 'AddUserToList', function() {
    	sc.present.push('Person' + (sc.present.length + 1)  );
  	});
  }])
  .controller('NegativePeople', ['$scope', 'roomState', function(sc, rs) {  
  	sc.present = {
  		 length : -1
  		};
  }])
  .controller('LongList', ['$scope', 'roomState', function(sc, rs) {  
  	var listLength = 50;
  	sc.present = [];
  	while (sc.present.length < listLength) { 
	    sc.present.push('Disp Person ' + (sc.present.length + 1)  );
	  }
  }])
  .controller('PeopleSample4', ['$scope', 'roomState', function(sc, rs) {
  	sc.present = ['Jim', 'Jean', 'John','Sam'];
  }]);