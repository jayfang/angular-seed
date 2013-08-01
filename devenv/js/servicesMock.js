'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
value('version', {
    major: '0.11',
    build: 'b123456'
})
    .value('roomState', {
        peopleInRoom: ['Jim', 'Jean', 'John'],
        iAm: 'John',
        myVote: {
            Index: 3
        },
        otherVotes: {
            John: true,
            Jim: true
        },
        addPerson: function() {
            this.peopleInRoom.push('Person' + (this.peopleInRoom.length + 1));
        },
        hasVoted: function(person) {
            return (this.otherVotes[person] === true);
        }
    });
