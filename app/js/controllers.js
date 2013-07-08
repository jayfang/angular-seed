'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('People', ['$scope', 'roomState', function(sc, rs) {  
  	sc.present = rs.peopleInRoom;
  }])
  .controller('MyCtrl2', [function() {

  }]);