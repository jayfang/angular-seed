'use strict';

/* Controllers */

angular.module('results.controllers', []).
// Application Test Controllers
controller('Results', ['$scope', 'roomState',
    function(sc, rs) {
        sc.deck = [1, 2, 4, 8, 16, 32, 64];
        
        
        
        
        sc.votes = [];
        sc.votes[1] = [];
        sc.votes[2] = ['Sam'];
        sc.votes[4] = ['Tanya'];
        sc.votes[8] = ['Simone', 'Janet'];
        sc.votes[16] = ['Bob','Bill', 'June'];
        sc.votes[32] = ['Jane'];
        sc.votes[64] = [];
        
        sc.myVote = {
            Index: undefined
        };

        sc.$on('vote', function(event, newVote) {
            sc.myVote.Index = newVote;
        });


    }
])
    .controller('deckVoted1st', ['$scope', 'roomState',
        function(sc, rs) {
            sc.deck = [1, 2, 4, 8, 16, 32, 64];

            sc.$on('vote', function(event, newVote) {
                rs.myVote.Index = newVote;
            });

            sc.myVote = rs.myVote;
        }
    ]);
