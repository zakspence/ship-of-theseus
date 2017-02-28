module.exports = function(grunt) {

grunt.initConfig({
  jshint: {
    options: {
      reporter: require('./node_modules/jshint-stylish'),
      predef: [ "document", "console", "$"],
      esnext: true, //'esnext' option is deprecated, use 'esversion'
      //forin: true, //throws an error if you don't iterate over
             //own properties
      jquery: true, //makes the jquery not throw the errors
      globalstrict: true, //requires '"use strict";'' at global level
      globals: {"angular": true,  }
    },
    files: ['../app/my-shorums/*.js', '../app/shorums-app/*.js']
  },
  copy: {
    angular: {
      expand: true,
        cwd: './node_modules/angular',
        src: "angular.min.js",
        dest: "../app/"
    },
    angularRoute: {
      expand: true,
        cwd: './node_modules/angular-route',
        src: "angular-route.min.js",
        dest: "../"
    }
  },
  watch: {
    javascripts: {
      files: ['../javascripts/**/*.js'],
      tasks: ['jshint' ]
    },
  }
});

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
grunt.registerTask('default', ['copy',  'jshint', 'watch']);
};