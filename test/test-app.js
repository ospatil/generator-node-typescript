'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const os = require('os');

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

describe('node-typescript:app with mocha', function () {
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
      '.travis.yml',
      '.editorconfig',
      '.gitignore',
      'LICENSE',
      'README.md'
    ]);
  });

});

describe('node-typescript:app with ava', function () {
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
      'tsconfig.test.json',
      'tslint.json',
      '.travis.yml',
      '.editorconfig',
      '.gitignore',
      'LICENSE',
      'README.md'
    ]);
  });

});
