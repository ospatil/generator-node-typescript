# TypeScript NodeJS Generator
[![Build Status](https://secure.travis-ci.org/ospatil/generator-node-typescript.png?branch=master)](https://travis-ci.org/ospatil/generator-node-typescript)
[![npm version](https://badge.fury.io/js/generator-node-typescript.svg)](http://badge.fury.io/js/generator-node-typescript)

> For my 1.x release documentation for TypeScript 1.8, refer to [readme file for 1.x release](./README-1x.md).

I'm a minimal [Yeoman](http://yeoman.io) generator for creating NodeJS modules using TypeScript. I let you quickly setup a project with latest available tools and best practices.

I use:

- _npm_ - as task runner. You can choose to use _gulp_ instead.
- _tslint_ - as linter for TypeScript source files.
- _mocha_ - as testing framework to write specs in **TypeScript** itself.
- _istanbul_ - a JavaScript code coverage tool working on TypeScript files.

You want to know if you can change any of these? Of course, why not? It is your module after all. I simply get down to business of generating, no questions asked. Once done, I get out of the way and you can do as you please!

## Usage

Install `generator-node-typescript` globally. If you are planning to use _gulp_, install `gulp-cli` globally.

```sh
$npm install -g generator-node-typescript
```

Create a new directory and `cd` into it.

```sh
$mkdir my-new-project && cd $_

```

Run the generator.

```sh
$yo node-typescript
```

You can choose to use _gulp_ as your build system using command - `$yo node-typescript --gulp`

Run `npm run` for information on available tasks.

```sh
 $npm run
Lifecycle scripts included in node-ts:
  test
    npm run build && mocha --compilers ts:ts-node/register --recursive test/**/*-spec.ts
  coverage
    nyc --reporter=text --reporter=html mocha --compilers ts:ts-node/register

available via `npm run-script`:
  clean
    rimraf lib
  lint
    tslint --format verbose 'src/**/*.ts'
  build
    npm run clean && npm run lint && echo Using TypeScript && tsc --version && tsc --pretty
  coverage
    nyc --reporter=text --reporter=html mocha --compilers ts:ts-node/register
  watch
    npm run build -- --watch
  watch:test
    npm run test -- --watch
```

If you choose to use _gulp_, you can find the available tasks using command `gulp help`.

```sh
$gulp help

Usage
  gulp [TASK] [OPTIONS...]

Available tasks
  build  Compiles all TypeScript source files [lint]
  clean  Cleans the generated js files from lib directory
  help   Display this help text.
  lint   Lints all TypeScript source files
  test   Runs the Jasmine test specs [build]
  watch  Watches ts source files and runs build on change
```

## Highlights of the latest release

- I use latest version of **TypeScript**.
- I use _npm_ to fetch type definitions making life so much easier. You can find more information on [https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/](https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/).
- I use _mocha_ as testing framework as it allows easier test runs from command line. Also, one of the most important things regarding testing is **now you can write tests in TypeScript itself**. The out-of-box configuration includes use of [ts-node](https://github.com/TypeStrong/ts-node) as mocha compiler allowing executing specs written in TypeScript without compiling them first.
- I need **no global dependencies**. Every dependency such as _TypeScript_ and _tslint_ is installed as local dev dependency allowing you to freely use different versions of these for different modules.
- I provide test coverage support using _istanbul_.
- I provide nice integration with [VS Code editor](https://code.visualstudio.com/). I configure `build`, `clean`, `lint`, `coverage` and `test` tasks that you can run using `Run Task` option.

## License

MIT
