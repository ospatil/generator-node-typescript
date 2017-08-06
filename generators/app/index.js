'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const _ = require('lodash');
const shelljs = require('shelljs');

module.exports = Generator.extend({
  initializing: function () {
    const done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the minimal ' + chalk.red('Node TypeScript') + ' generator!'
    ));

    this.log(
      chalk.cyan('I simply get down to business of generating, no questions asked!')
      + '\n'
      + chalk.yellow('Libraries you ask? I use npm (or optionally gulp) as task runner and jest for testing.')
      + '\n'
      + chalk.gray('Can you change these? Of course, it\'s your code. I get out of the way after scaffolding.')
    );

    done();
  },

  writing: {
    srcFiles: function () {
      this.fs.copy(
        this.templatePath('src'),
        this.destinationPath('src')
      );
    },

    testFiles: function () {
      if (this.options.mocha || this.options.gulp) {
        // 2.0.0-beta: copying the spec file needs templating due to the ts-node problem on windows
        // this.directory('test', 'test');
        this.fs.copyTpl(
          this.templatePath('test/greeter-spec_mocha.ts'),
          this.destinationPath('test/greeter-spec.ts'),
          { isWindows: process.platform === 'win32' }
        );
        this.fs.copyTpl(
          this.templatePath('test/index-spec_mocha.ts'),
          this.destinationPath('test/index-spec.ts'),
          { isWindows: process.platform === 'win32' }
        );
      } else if (this.options.ava) {
        this.fs.copyTpl(
          this.templatePath('test/greeter-spec_ava.ts'),
          this.destinationPath('test/greeter-spec.ts')
        );
        this.fs.copyTpl(
          this.templatePath('test/index-spec_ava.ts'),
          this.destinationPath('test/index-spec.ts')
        );
      } else {
        this.fs.copyTpl(
          this.templatePath('test/greeter-spec.ts'),
          this.destinationPath('__tests__/greeter-spec.ts')
        );
        this.fs.copyTpl(
          this.templatePath('test/index-spec.ts'),
          this.destinationPath('__tests__/index-spec.ts')
        );
      }
    },

    vsCodeFiles: function () {
      if (this.options.gulp) {
        this.fs.copy(
          this.templatePath('_vscode/tasks_gulp.json'),
          this.destinationPath('.vscode/tasks.json')
        );
      } else {
        this.fs.copy(
          this.templatePath('_vscode/tasks.json'),
          this.destinationPath('.vscode/tasks.json')
        );
      }
      this.fs.copy(
        this.templatePath('_vscode/settings.json'),
        this.destinationPath('.vscode/settings.json')
      );
      if (!(this.options.gulp || this.options.mocha || this.options.ava)) { // copy launch.json only for default jest configuration
        this.fs.copy(
          this.templatePath('_vscode/launch.json'),
          this.destinationPath('.vscode/launch.json')
        );
      }
    },

    rootFiles: function () {
      const today = new Date();

      if (this.options.gulp) { // copy gulp files
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

        this.fs.copy(
          this.templatePath('README_gulp.md'),
          this.destinationPath('README.md')
        );
      } else {
        if (this.options.mocha) { // copy mocha files
          this.fs.copyTpl(
            this.templatePath('_package_mocha.json'),
            this.destinationPath('package.json'),
            { appname: _.kebabCase(path.basename(process.cwd())) }
          );
          this.fs.copy(
            this.templatePath('travis_mocha.yml'),
            this.destinationPath('.travis.yml')
          );
        } if (this.options.ava) { // copy ava files
          this.fs.copyTpl(
            this.templatePath('_package_ava.json'),
            this.destinationPath('package.json'),
            { appname: _.kebabCase(path.basename(process.cwd())) }
          );
          this.fs.copy(
            this.templatePath('travis_ava.yml'),
            this.destinationPath('.travis.yml')
          );
          this.fs.copy(
            this.templatePath('_tsconfig.test.json'),
            this.destinationPath('tsconfig.test.json')
          );
        } else { // copy files for default jest configuration
          this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),
            { appname: _.kebabCase(path.basename(process.cwd())) }
          );
          this.fs.copy(
            this.templatePath('travis.yml'),
            this.destinationPath('.travis.yml')
          );
        }
        // copy readme for non-gulp configurations
        this.fs.copy(
          this.templatePath('README.md'),
          this.destinationPath('README.md')
        );
      }
      // copy files for default jest configuration
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
      this.fs.copyTpl(
        this.templatePath('LICENSE'),
        this.destinationPath('LICENSE'),
        { year: today.getFullYear().toPrecision(4) }
      );
    }
  },

  install: {
    npmInstall: function () {
      const generator = this;
      if (shelljs.which('yarn')) {
        generator.yarnInstall();
      } else {
        generator.npmInstall(null, { skipInstall: this.options['skip-install'] });
      }
    }
  }
});
