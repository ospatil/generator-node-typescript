# TypeScript NodeJS Generator
[![Build Status](https://secure.travis-ci.org/ospatil/generator-node-typescript.png?branch=master)](https://travis-ci.org/ospatil/generator-node-typescript)
[![npm version](https://badge.fury.io/js/generator-node-typescript.svg)](http://badge.fury.io/js/generator-node-typescript)

I'm a [Yeoman](http://yeoman.io) generator that allows you to create NodeJS modules using TypeScript. I let you quickly setup a project with latest available tools and best practices.
Tools and libraries I use -
  - _tsc_ - for compiling TypeScript.
  - _typings_ - for management of TypeScript definitions.
  - _tsconfig.json_ - for providing compiler options.
  - _tslint_ - for linting TypeScript source files.
  - [_gulp_](http://gulpjs.com/) - as a build system. You can carry out above tasks through gulp.
  - [_Jasmine 2_](http://jasmine.github.io/2.3/introduction.html) - for writing tests.

>You want to know if you can change any of these? Of course, why not? It is your module after all. I simply get down to business of generating, no questions asked. Once done, I get out of the way and you can do as you please!

## Usage

Install `generator-node-typescript`, `gulp-cli` and `typings` globally.

```
npm install -g generator-node-typescript gulp-cli typings
```

Create a new directory and `cd` into it.

```
mkdir my-new-project && cd $_
```
Run `yo node-typescript`.
```
yo node-typescript
```
Run `gulp --help` for information on available tasks.
```
gulp --help
```
Here is the list of tasks available out of the box -
```sh
  _build          INTERNAL TASK - Compiles all TypeScript source files
  build           Compiles all TypeScript source files and updates module references
  clean           Cleans the generated js files from lib directory
  gen-def         Generate a single .d.ts bundle containing external module declarations exported from TypeScript module files
  help            Display this help text.
  test            Runs the Jasmine test specs [build]
  tslint          Lints all TypeScript source files
  update-tsconfig Update files section in tsconfig.json
```

## What's new in the latest release?
- Switch to _typings_ as manager for TypeScript definitions. The TSD team has deprecated _tsd_ in favour of _typings_. You can find more information about _typings_ on [Github](https://github.com/typings/typings).
- Integration of _dts-generator_ tool to generate a single .d.ts bundle containing external module declarations exported from TypeScript source files in the module.
- Less global dependencies. I install `typescript` and `tslint` as local dev dependencies allowing you to freely use different versions of these for different modules.

## Additional notes
- I provide nice integration with [VS Code editor](https://code.visualstudio.com/). I configure the `gulp build` task as the default VS Code build task.

## License

MIT
