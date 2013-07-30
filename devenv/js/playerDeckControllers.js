'use strict';

/* Controllers */

/* //JDA - Do I want to reduce scope of visibility of baseFunc */
var baseFunc, preset;

baseFunc = function(sc, rs) {  
  	sc.deck = [1, 2, 4, 8, 16, 32, 64];
		sc.$on( 'vote', function(event, newVote) {
  		sc.voteIndex = newVote;
  	});
  	
  	sc.voteIndex = undefined;
};
  
//JDA want to clone baseFunc but set voteIndex = 0
preset = function(sc, rs) {
	baseFunc(sc, rs);
 	sc.voteIndex = 0;
}


angular.module('playerdeck.controllers', []).
// Application Test Controllers
  controller('deck', ['$scope', 'roomState', baseFunc])
  .controller('deckVoted1st', ['$scope', 'roomState', preset]);