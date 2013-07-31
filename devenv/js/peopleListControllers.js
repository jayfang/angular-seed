'use strict';

/* Controllers */

angular.module('devEnv.controllers', []).
// Development environment controller
  controller('DevEnvironment', ['$scope', 'roomState', function(sc, rs) {
		sc.addPerson = function() {
  		rs.addPerson();
  	};
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
  .controller('PeopleFromService', ['$scope', 'roomState', function(sc, rs) {
  	sc.present = rs.peopleInRoom;
    sc.hasVoted = function(person) {
      return rs.hasVoted( person );
    }
  }]);