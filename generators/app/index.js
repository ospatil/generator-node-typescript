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
      'Welcome to the minimal ' + chalk.red('Node TypeScript') + ' generator!'
    ));

    this.log(
      chalk.cyan('I simply get down to business of generating, no questions asked!')
      + '\n'
      + chalk.yellow('Libraries you ask? I use npm (or optionally gulp) as task runner and mocha for testing.')
      + '\n'
      + chalk.gray('Can you change these? Of course, it\'s your code. I get out of the way after scaffolding.')
    );

    done();
  },

  writing: {
    dir: function () {
      this.directory('src', 'src');

      // 2.0.0-beta: copying the spec file needs templating due to the ts-node problem on windows
      // this.directory('test', 'test');
      this.fs.copyTpl(
        this.templatePath('test/greeter-spec.ts'),
        this.destinationPath('test/greeter-spec.ts'),
        { isWindows: process.platform === 'win32' }
      );
    },

    projectfiles: function () {
      if (this.options.gulp) {
        this.fs.copy(
          this.templatePath('_vscode/tasks_gulp.json'),
          this.destinationPath('.vscode/tasks.json')
        );

        this.fs.copyTpl(
          this.templatePath('_package_gulp.json'),
          this.destinationPath('package.json'),
          { appname: _.kebabCase(path.basename(process.cwd())) }
        );

        this.fs.copy(
          this.templatePath('_gulpfile.js'),
          this.destinationPath('gulpfile.js'),
          { appname: _.kebabCase(path.basename(process.cwd())) }
        );
      } else {
        this.fs.copy(
          this.templatePath('_vscode/tasks.json'),
          this.destinationPath('.vscode/tasks.json')
        );

        this.fs.copyTpl(
          this.templatePath('_package.json'),
          this.destinationPath('package.json'),
          { appname: _.kebabCase(path.basename(process.cwd())) }
        );
      }

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
