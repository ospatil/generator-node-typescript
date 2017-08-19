'use strict';
const _ = require('lodash');
const Generator = require('yeoman-generator');
const yosay = require('yosay');

const PlatformMap = require('./platform-map');

module.exports = Generator.extend({
  initializing: function () {
    const done = this.async();

    this.argument('className', {
      type: String,
      required: true,
      desc: 'the name of the class'
    });

    this.templateContext = {
      className: this.options.className,
      fileName: _.kebabCase(this.options.className),
      isWindows: process.platform === 'win32'
    };

    this.log(yosay(`Generating ${this.templateContext.className}`));

    this.testMap = new PlatformMap();

    done();
  },

  writing: {

    srcFiles: function () {
      this.fs.copyTpl(
        this.templatePath('src/blueprint.ts'),
        this.destinationPath('src/' + this.templateContext.fileName + '.ts'),
        this.templateContext
      );
    },

    testFiles: function () {
      if (this.options) {
        if (this.options.mocha || this.options.gulp) {
          this._writeTestTemplates('mocha');
        } else if (this.options.ava) {
          this._writeTestTemplates('ava');
        } else {
          this._writeTestTemplates('jest');
        }
      } else {
        this._writeTestTemplates('jest');
      }
    },

    indexFile: function () {
      this._appendTpl(
        this.templatePath('src/index-blueprint.ts'),
        this.destinationPath('src/index.ts'),
        this.templateContext
      );
    }

  },

  _writeTestTemplates: function (testPlatform) {
    const testInfo = this.testMap.getTestPlatformInfo(testPlatform);
    this.fs.copyTpl(
      this.templatePath(testInfo.templates.spec),
      this.destinationPath(`${testInfo.folder}/${this.templateContext.fileName}-spec.ts`),
      this.templateContext);

    const indexSpec = `${testInfo.folder}/index-spec.ts`;

    if (!this.fs.exists(indexSpec)) {
      this.fs.copyTpl(
        this.templatePath(testInfo.templates.head),
        this.destinationPath(indexSpec),
        this.templateContext);
    }

    this._appendTpl(
      this.templatePath(testInfo.templates.ndx),
      this.destinationPath(indexSpec),
      this.templateContext);
  },

  _appendTpl: function (from, to, context, tplSettings, options) {
    const template = _.template(this.fs.read(from), tplSettings);
    if (this.fs.exists(to)) {
      this.fs.append(to, template(context), options);
    }
    else {
      this.fs.write(to, template(context), options);
      this.log('Run the app generator first');
    }
  },

});
