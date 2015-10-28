# TypeScript NodeJS Generator
[![Build Status](https://secure.travis-ci.org/ospatil/generator-node-typescript.png?branch=master)](https://travis-ci.org/ospatil/generator-node-typescript)
[![npm version](https://badge.fury.io/js/generator-node-typescript.svg)](http://badge.fury.io/js/generator-node-typescript)

I'm a [Yeoman](http://yeoman.io) generator that allows you to create NodeJS modules using TypeScript. I let you quickly setup a project with latest available tools and best practices.
Tools and libraries I use -
  - tsc - for compiling TypeScript.
  - tsconfig.json - for providing compiler options.
  - tslint - for linting TypeScript source files.
  - [gulp](http://gulpjs.com/) - as a build system. You can carry out above tasks through gulp.
  - [Jasmine 2](http://jasmine.github.io/2.3/introduction.html) - for writing tests.

>You want to know if you can change any of these? Of course, why not? It is your module after all. I simply get down to business of generating, no questions asked. Once done, I get out of the way as if I were not there at all and you can do as you please!

## Usage

Install `generator-node-typescript` globally.

```
npm install -g generator-node-typescript
```

I don't need `typescript-tools` and `tsd` but these are great tools to have for working with TypeScript in editors like sublime and atom and I heartily recommend them.
Though I install `typescript` and `tslint` locally to avoid global dependencies, installing them globally wouldn't be a bad idea at all.

Make a new directory and `cd` into it.

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

## Quick notes
- I provide nice integration with [VSCode editor](https://code.visualstudio.com/). I configure the `gulp build` task as the default VSCode build task.
- The `gulp build` task also updates _tsconfig/files_ section using _tsconfig/filesGlob_ before build so you don't have to do it manually.

## License

MIT
