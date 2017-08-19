'use strict';
var PlatformMap = (function () {
  function PlatformMap() {
    this.templatesMap = new Map();
    const self = this;
    const plats = [
      'ava',
      'jest',
      'mocha',
    ];
    plats.forEach(function (plat) {
      return self.templatesMap.set(plat, {
        folder: plat === 'jest' ? '__tests__' : 'test',
        templates: {
          head: 'test/' + plat + '/index-spec-head.ts',
          ndx: 'test/' + plat + '/index-spec-blueprint.ts',
          spec: 'test/' + plat + '/blueprint-spec.ts',
        },
      });
    });
  }
  PlatformMap.prototype.getTestPlatformInfo = function (plat) {
    return this.templatesMap.get(plat);
  };
  return PlatformMap;
}());
module.exports = PlatformMap;
