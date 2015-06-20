'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('node-ts:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .on('end', done);
  });

  it('copies src directory with file', function () {
    assert.file([
      'src/greeter.ts'
    ]);
  });

  it('copies test directory with file', function () {
    assert.file([
      'test/greeter-spec.js'
    ]);
  });

  it('creates app files', function () {
    assert.file([
      'package.json'
    ]);
  });

  it('creates project files', function () {
    assert.file([
      'gulpfile.js',
      'tsconfig.json',
      'tslint.json',
      '.editorconfig',
      '.gitignore'
    ]);
  });

});
