'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the amazing ' + chalk.red('Node TypeScript') + ' generator!'
      ));

    this.log(
      chalk.cyan('I simply get down to business of generating, no questions asked!')
      + '\n'
      + chalk.yellow('Libraries you ask? I use gulp, jasmine, tslint and I compile TypeScript to CommonJS modules using tsconfig.json.')
      + '\n'
      + chalk.gray('Can you change these? Of course, it\'s your library. I get out of the way after scaffolding.')
      );

    done();
  },

  writing: {
    dir: function () {
      this.directory('src', 'src');
      this.directory('test', 'test');
      this.directory('_vscode', '.vscode');
    },

    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { appname: _.kebabCase(path.basename(process.cwd())) }
        );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js'),
        { appname: _.kebabCase(path.basename(process.cwd())) }
        );
      this.fs.copy(
        this.templatePath('_tsconfig.json'),
        this.destinationPath('tsconfig.json')
        );
      this.fs.copy(
        this.templatePath('_tslint.json'),
        this.destinationPath('tslint.json')
        );
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
        );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
        );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
        );
    }
  },

  install: {
    npmInstall: function () {
      var generator = this;
      generator.npmInstall(null, { skipInstall: this.options['skip-install'] }, function () {
        //generator.spawnCommandSync('typings', ['init']); //typings init
        //generator.spawnCommandSync('typings', ['install', 'dt~node', '--save', '--global']) //typings install --save dt~node --global
      });
  }
  }
});
