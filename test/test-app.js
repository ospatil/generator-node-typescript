'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('node-typescript:app with gulp', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        skipInstall: true,
        gulp: true
      })
      .on('end', done);
  });

  it('creates necessary files', function () {
    assert.file([
      '.vscode/tasks.json',
      '.vscode/settings.json',
      'src/greeter.ts',
      'src/index.ts',
      'test/greeter-spec.ts',
      'package.json',
      'gulpfile.js',
      'tsconfig.json',
      'tslint.json',
      '.editorconfig',
      '.gitignore',
      'LICENSE',
      'README.md'
    ]);
  });

});

describe('node-typescript:app without gulp', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        skipInstall: true
      })
      .on('end', done);
  });

  it('creates project files', function () {
    assert.file([
      '.vscode/tasks.json',
      '.vscode/settings.json',
      'src/greeter.ts',
      'src/index.ts',
      'test/greeter-spec.ts',
      'package.json',
      'tsconfig.json',
      'tslint.json',
      '.editorconfig',
      '.gitignore',
      'LICENSE',
      'README.md'
    ]);
  });

});
