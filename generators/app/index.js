"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const path = require("path");
const _ = require("lodash");
const shelljs = require("shelljs");

const BUILD_PATH = "build";

module.exports = Generator.extend({
  initializing: function() {
    const done = this.async();

    // Have Yeoman greet the user.
    this.log(
      yosay(
        "Welcome to the minimal " + chalk.red("Node TypeScript") + " generator!"
      )
    );

    this.log(
      chalk.cyan(
        "I simply get down to business of generating, no questions asked!"
      ) +
        "\n" +
        chalk.yellow(
          "Libraries you ask? I use npm as task runner and jest for testing."
        ) +
        "\n" +
        chalk.gray(
          "Can you change these? Of course, it's your code. I get out of the way after scaffolding."
        )
    );

    this.composeWith(
      require.resolve("../classlib"),
      Object.assign({ arguments: ["Greeter"] }, this.options)
    );

    if (this.options.gulp) {
      throw new Error("Gulp option is no longer supported.");
    }

    done();
  },

  writing: {
    vsCodeFiles: function() {
      this.fs.copy(
        this.templatePath("_vscode/tasks.json"),
        this.destinationPath(".vscode/tasks.json")
      );
      this.fs.copy(
        this.templatePath("_vscode/settings.json"),
        this.destinationPath(".vscode/settings.json")
      );
      if (!(this.options.mocha || this.options.ava)) {
        // copy launch.json only for default jest configuration
        this.fs.copy(
          this.templatePath("_vscode/launch.json"),
          this.destinationPath(".vscode/launch.json"),
          { buildpath: BUILD_PATH }
        );
      }
    },

    rootFiles: function() {
      if (this.options.mocha) {
        // copy mocha files
        this.fs.copyTpl(
          this.templatePath("_package_mocha.json"),
          this.destinationPath("package.json"),
          {
            appname: _.kebabCase(path.basename(process.cwd())),
            buildpath: BUILD_PATH
          }
        );
        this.fs.copy(
          this.templatePath("travis_mocha.yml"),
          this.destinationPath(".travis.yml")
        );
      } else if (this.options.ava) {
        // copy ava files
        this.fs.copyTpl(
          this.templatePath("_package_ava.json"),
          this.destinationPath("package.json"),
          {
            appname: _.kebabCase(path.basename(process.cwd())),
            buildpath: BUILD_PATH
          }
        );
        this.fs.copy(
          this.templatePath("travis_ava.yml"),
          this.destinationPath(".travis.yml")
        );
        this.fs.copyTpl(
          this.templatePath("_tsconfig.test.json"),
          this.destinationPath("tsconfig.test.json"),
          {
            buildpath: BUILD_PATH
          }
        );
      } else {
        // copy files for default jest configuration
        this.fs.copyTpl(
          this.templatePath("_package.json"),
          this.destinationPath("package.json"),
          {
            appname: _.kebabCase(path.basename(process.cwd())),
            buildpath: BUILD_PATH
          }
        );
        this.fs.copy(
          this.templatePath("travis.yml"),
          this.destinationPath(".travis.yml")
        );
      }
      // copy files common for all configurations
      this.fs.copy(
        this.templatePath("README.md"),
        this.destinationPath("README.md"),
        { buildpath: BUILD_PATH }
      );
      this.fs.copyTpl(
        this.templatePath("_tsconfig.json"),
        this.destinationPath("tsconfig.json"),
        { buildpath: BUILD_PATH }
      );
      this.fs.copy(
        this.templatePath("_tslint.json"),
        this.destinationPath("tslint.json")
      );
      this.fs.copy(
        this.templatePath("editorconfig"),
        this.destinationPath(".editorconfig")
      );
      this.fs.copy(
        this.templatePath("dockerignore"),
        this.destinationPath(".dockerignore"),
        { buildpath: BUILD_PATH }
      );
      this.fs.copy(
        this.templatePath("gitignore"),
        this.destinationPath(".gitignore"),
        { buildpath: BUILD_PATH }
      );
      this.fs.copy(
        this.templatePath("npmignore"),
        this.destinationPath(".npmignore"),
        { buildpath: BUILD_PATH }
      );
      this.fs.copyTpl(
        this.templatePath("docker-compose.yml"),
        this.destinationPath("docker-compose.yml"),
        { appname: _.kebabCase(path.basename(process.cwd())) }
      );
      this.fs.copyTpl(
        this.templatePath("docker-compose.builder.yml"),
        this.destinationPath("docker-compose.builder.yml"),
        { appname: _.kebabCase(path.basename(process.cwd())) }
      );
      this.fs.copyTpl(
        this.templatePath("Makefile"),
        this.destinationPath("Makefile"),
        { appname: _.kebabCase(path.basename(process.cwd())) }
      );
    }
  },

  install: {
    npmInstall: function() {
      const generator = this;
      if (shelljs.which("yarn")) {
        generator.yarnInstall();
      } else {
        generator.npmInstall(null, {
          skipInstall: this.options["skip-install"]
        });
      }
    }
  }
});
