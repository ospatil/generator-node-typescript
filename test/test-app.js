/*global before describe it*/
'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('node-typescript:app with mocha', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        skipInstall: true,
        mocha: true
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
      'test/index-spec.ts',
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
        skipInstall: true,
        ava: true
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
      'test/index-spec.ts',
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

describe('node-typescript:app with jest - default configuration', function () {
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
      '.vscode/launch.json',
      'src/greeter.ts',
      'src/index.ts',
      '__tests__/greeter-spec.ts',
      '__tests__/index-spec.ts',
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
