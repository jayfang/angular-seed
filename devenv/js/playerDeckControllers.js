'use strict';

/* Controllers */

angular.module('playerdeck.controllers', []).
// Application Test Controllers
controller('deck', ['$scope', 'roomState',
    function(sc, rs) {
        sc.deck = [1, 2, 4, 8, 16, 32, 64];
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
