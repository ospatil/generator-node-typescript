'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sg_release: {
      release: {
        options: {
          skipBowerInstall: true,
          tagName: 'v%VERSION%',
          files: ['package.json'],
          commitMessagePrefix: '',
          pushTo: 'origin',
          commitFiles: ['-a']
        }
      }
    }
  });

  grunt.registerTask('release', 'Makes a new release tag of your application to your Git repo', [
    'sg_release'
  ]);
}
