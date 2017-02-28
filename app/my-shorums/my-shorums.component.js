'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('myShorums').
  component('myShorums', {
    templateUrl: 'my-shorums/my-shorums.template.html',
    controller: function MyShorumsController($http) {
      var self = this;

      $http.get('shorums/shorums.json').then(function(response) {
        self.shorums = response.data;
        console.log('scope',self);
      });
    }
  });
