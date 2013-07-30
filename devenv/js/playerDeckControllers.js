'use strict';

/* Controllers */

/* //B //JDA - I want to reduce scope of visibility of baseFunc - currently on "Window"*/
var basePlayerdeckController =  function(sc, rs) {  
  	sc.deck = [1, 2, 4, 8, 16, 32, 64];
		sc.$on( 'vote', function(event, newVote) {
  		sc.voteIndex = newVote;
  	});
  	
  	sc.voteIndex = undefined;
};

angular.module('playerdeck.controllers', []).
// Application Test Controllers
  controller('deck', ['$scope', 'roomState', function(sc, rs) {  
		basePlayerdeckController(sc, rs);
	}])
  .controller('deckVoted1st', ['$scope', 'roomState', function(sc, rs) {  
		basePlayerdeckController(sc, rs);
		sc.voteIndex = 0;
	}]);
  