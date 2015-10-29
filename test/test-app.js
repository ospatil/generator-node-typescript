'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('node-ts:app', function () {
  //Needs only 5 seconds for running tsd and tsd install node --save but keeping it for 30 seconds for travis
  this.timeout(5000);
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
      '.vscode/tasks.json',
      'typings/app.d.ts',
      'typings/node',
      'gulpfile.js',
      'tsconfig.json',
      'tslint.json',
      '.editorconfig',
      '.gitignore',
      '.jshintrc'
    ]);
  });

});
