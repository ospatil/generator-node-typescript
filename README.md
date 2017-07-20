# TypeScript NodeJS Generator
[![Build Status](https://secure.travis-ci.org/ospatil/generator-node-typescript.png?branch=master)](https://travis-ci.org/ospatil/generator-node-typescript)
[![npm version](https://badge.fury.io/js/generator-node-typescript.svg)](http://badge.fury.io/js/generator-node-typescript)

> For my 1.x release documentation for TypeScript 1.8, refer to [readme file for 1.x release](./README-1x.md).

I'm a minimal [Yeoman](http://yeoman.io) generator for creating NodeJS packages using TypeScript. I let you quickly setup a project with latest available tools and best practices.

I use:

- _npm_ - as task runner. You can choose to use _gulp_ instead.
- _tslint_ - as linter for TypeScript source files.
- _ava_ - as [testing framework](https://github.com/avajs/ava) to write specs in **TypeScript** itself. You can choose to use _mocha_ instead.
- _nyc_ - a JavaScript code coverage tool working on TypeScript files.

You want to know if you can change any of these? Of course, why not? It is your package after all. I simply get down to business of generating, no questions asked. Once done, I get out of the way and you can do as you please!

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

You can choose to use _mocha_ as your test framework using command - `$yo node-typescript --mocha`

Run `npm run` for information on available tasks.

```sh
 $npm run
Lifecycle scripts included in ts-node-ava:
  prepublish
    npm run build
  test
    npm run clean && tsc -p tsconfig.test.json --pretty && nyc --exclude "**/*-spec.js" ava "**/*-spec.js" --verbose

available via `npm run-script`:
  clean
    rimraf lib && rimraf coverage && rimraf .nyc_output && rimraf lib_test
  format
    prettier --write "{src,test}/**/*.ts"
  lint
    tslint --force --format verbose "src/**/*.ts"
  prebuild
    npm run clean && npm run format && npm run lint && echo Using TypeScript && tsc --version
  build
    tsc --pretty
  coverage
    nyc report --reporter=lcov --reporter=text --reporter=html
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
  test   Runs the mocha test specs [build]
  watch  Watches ts source files and runs build on change
```

## Highlights of the latest release

- I use latest version of **TypeScript**.
- I use [yarn](https://yarnpkg.com) in place of npm if it is already installed on your machine.
- I use _ava_ which is a [Futuristic JavaScript test runner](https://github.com/avajs/ava) as testing framework (optionally _mocha_). Also, one of the most important things regarding testing is **you can write tests in TypeScript itself**.
- I use _prettier_ integrated with _tslint_ to provide no-fuss code formatting and linting.
- I need **no global dependencies**. Every dependency such as _TypeScript_ and _tslint_ is installed as local dev dependency allowing you to freely use different versions of these for different modules.
- I provide test coverage support using _nyc_.
- I provide nice integration with [VS Code editor](https://code.visualstudio.com/). I configure `build`, `clean`, `lint`, `coverage`, 'format' and `test` tasks that you can run using `Run Task` option.
- **You can directly run the currently open TypeScript file in VS Code using task `ts-node: Run current file`.** I use [ts-node](https://github.com/TypeStrong/ts-node) to provide this functionality.

## License

MIT
