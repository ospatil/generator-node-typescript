/*global before describe it*/
'use strict';

const fs = require('fs-extra');
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const PlatformMap = require('../generators/classlib/platform-map');

describe('node-typescript:classlib', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/classlib'))
      .inTmpDir(function (dir) {
        fs.outputFileSync(
          path.join(dir, 'src/index.ts'),
          'import * from \'some-library\';'
        );
        fs.outputFileSync(
          path.join(dir, '__tests__/index-spec.ts'),
          'import * as index from \'../src/index\';'
        );
      })
      .withArguments(['CustomerInventoryItem'])
      .withOptions({
        skipInstall: true
      })
      .on('end', done);
  });

  it('creates classlib files', function () {
    assert.file([
      'src/customer-inventory-item.ts',
      'src/index.ts',
      '__tests__/customer-inventory-item-spec.ts',
      '__tests__/index-spec.ts'
    ]);
  });

  describe('platform-map', function () {
    let platmap;
    describe('returns template info', function () {

      before(function () {
        platmap = new PlatformMap();
      });

      it('ava', function () {
        const actual = platmap.getTestPlatformInfo('ava');
        assert.equal(actual.folder, 'test');
        assert.equal(actual.templates.ndx, 'test/ava/index-spec-blueprint.ts');
        assert.equal(actual.templates.spec, 'test/ava/blueprint-spec.ts');
      });

      it('jest', function () {
        const actual = platmap.getTestPlatformInfo('jest');
        assert.equal(actual.folder, '__tests__');
        assert.equal(actual.templates.ndx, 'test/jest/index-spec-blueprint.ts');
        assert.equal(actual.templates.spec, 'test/jest/blueprint-spec.ts');
      });

      it('mocha', function () {
        const actual = platmap.getTestPlatformInfo('mocha');
        assert.equal(actual.folder, 'test');
        assert.equal(actual.templates.head, 'test/mocha/index-spec-head.ts');
        assert.equal(actual.templates.ndx, 'test/mocha/index-spec-blueprint.ts');
        assert.equal(actual.templates.spec, 'test/mocha/blueprint-spec.ts');
      });

    });
  });

});
