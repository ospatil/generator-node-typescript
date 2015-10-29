# TypeScript NodeJS Generator
[![Build Status](https://secure.travis-ci.org/ospatil/generator-node-typescript.png?branch=master)](https://travis-ci.org/ospatil/generator-node-typescript)
[![npm version](https://badge.fury.io/js/generator-node-typescript.svg)](http://badge.fury.io/js/generator-node-typescript)

I'm a [Yeoman](http://yeoman.io) generator that allows you to create NodeJS modules using TypeScript. I let you quickly setup a project with latest available tools and best practices.
Tools and libraries I use -
  - _tsc_ - for compiling TypeScript.
  - _tsd_ - for TypeScript definition files management.
  - _tsconfig.json_ - for providing compiler options.
  - _tslint_ - for linting TypeScript source files.
  - [_gulp_](http://gulpjs.com/) - as a build system. You can carry out above tasks through gulp.
  - [_Jasmine 2_](http://jasmine.github.io/2.3/introduction.html) - for writing tests.

>You want to know if you can change any of these? Of course, why not? It is your module after all. I simply get down to business of generating, no questions asked. Once done, I get out of the way as if I were not there at all and you can do as you please!

## Usage

Install `typescript tsd tslint generator-node-typescript` globally.

```
npm install -g typescript tsd tslint generator-node-typescript
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
  gen_tsrefs      Generates the app.d.ts references file dynamically for all application *.ts files
  help            Display this help text.
  test            Runs the Jasmine test specs [build]
  tsconfig_files  Update files section in tsconfig.json
  tslint          Lints all TypeScript source files
```

## Additional notes
- I provide nice integration with [VSCode editor](https://code.visualstudio.com/). I configure the `gulp build` task as the default VSCode build task.
- The `gulp build` task also updates _tsconfig/files_ section using _tsconfig/filesGlob_ and generates _typings/app.d.ts_ references file dynamically
for all the application *.ts files before build so you don't have to do it manually.

## Development tips
- The _tsd_ tool dynamically updates _typings/tsd.d.ts_ file for all type definitions you install through it. Also, the gulp *gen_tsrefs* task dynamically
updates _typings/app.d.ts_ references file for all application *.ts. Therefore you just need to add references to these two files in any _.ts_ file and you
are good to go with *tsc* compiler.
- To keep on using the typical CommonJS exports and imports use the `export` and `inport` systax mentioned in the example below.

  ```ts
  class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet() {
      return 'Bonjour, ' + this.greeting + '!';
    }
  }
  //The following line is important, export like this allows you to use the old-style CommonJS export/import.
  export = Greeter;

  ```
  This is how the above class can be used in some other file.

  ```ts
  /// <reference path="../typings/tsd.d.ts" />
  /// <reference path="../typings/app.d.ts" />

  import Greeter = require('./greeter');

  const greeter = new Greeter('friend');
  greeter.greet();

  ```

## License

MIT
