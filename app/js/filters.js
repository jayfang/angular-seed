'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      console.log('Input version is' + version + '\n')
      console.log('Input argument is' + text + '\n')
      return String(text).replace(/\%VERSION\%/mg, version.major + ' build ' + version.build );
    }
  }]);
