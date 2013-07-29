'use strict';

/* Controllers */

angular.module('playerdeck.controllers', []).
// Application Test Controllers
  controller('deck', ['$scope', 'roomState', function(sc, rs) {  
  	sc.deck = [1, 2, 4, 8, 16, 32, 64];
		sc.$on( 'vote', function(event, newVote) {
  		sc.voteIndex = newVote;
    	// sc.present.push('Person' + (sc.present.length + 1)  );
  	});
  	
  	sc.voteIndex = undefined;
  	
  	
  }])
  .controller('deckVoted1st', ['$scope', 'roomState', function(sc, rs) {
		sc.$on( 'vote', function(event, newVote) {
  		sc.voteIndex = newVote;
    	// sc.present.push('Person' + (sc.present.length + 1)  );
  	});
  	sc.deck = [1, 2, 4, 8, 16, 32, 64];
  	sc.voteIndex = 2;
  }]);