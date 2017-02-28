'use strict';

angular.
	module('myShorums').
	component('myShorums', {
		templateUrl: 'my-shorums/my-shorums.template.html',
		controller: function MyShorumsController($http) {
		  var self = this;

		  $http.get('shorums/shorums.json')
		  .then( response => {
		    self.shorums = response.data;
		    console.log('scope',self);
		  });
		}
	});