'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', { major:'0.11', build:'b123456'} )
  .value('roomState', { 
  		peopleInRoom: ['Jim', 'Jean', 'John'],
  		iAm: 'John',
  		myVote: { Index: 3 },
  		addPerson: function() {
  			this.peopleInRoom.push('Person' + (this.peopleInRoom.length + 1)  );
  		}
  });
  
