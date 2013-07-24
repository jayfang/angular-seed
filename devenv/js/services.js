'use strict';

/* Services */

//JDA not currently used in DevEnv 

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', { major:'0.1', build:'b123456'} )
  .value('roomState', { peopleInRoom: ['Jim', 'Jean', 'John'], iAm: 'John' });
  
