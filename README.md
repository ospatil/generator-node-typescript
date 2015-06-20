# TypeScript NodeJS Generator [![Build Status](https://secure.travis-ci.org/ospatil/generator-node-typescript.png?branch=master)](https://travis-ci.org/ospatil/generator-node-typescript)

I'm a [Yeoman](http://yeoman.io) generator that allows you to create NodeJS modules using TypeScript. I let you quickly setup a project with latest available tools and best practices.
Tools and libraries I use -
  - tsc - for compiling TypeScript.
  - tsconfig.json - for providing compiler options.
  - tslint - for linting TypeScript source files.
  - [gulp](http://gulpjs.com/) - as a build system. You can carry out above tasks through gulp.
  - [Jasmine 2](http://jasmine.github.io/2.3/introduction.html) - for writing tests.

>You want to know if you can change any of these? Of course, why not? It is your module after all. I simply get down to business of generating, no questions asked. Once done, I get out of the way as if I were not there at all and you can do as you please!

## Usage

Install `typescript`, `tslint`, `typescript-tools`, `tsd` and `generator-node-typescript` globally.

```
npm install -g typescript tslint typescript-tools tsd generator-node-typescript
```

> I don't actually need `typescript-tools` and `tsd` but these are great tools to have for working with TypeScript in editors like sublime and atom and I heartily recommend it.

Make a new directory and `cd` into it. 

```
mkdir my-new-project && cd $_
```
Run `yo nodejs-typescript`.
```
yo nodejs-typescript
```
Run `gulp --help` for information on available tasks.
```
gulp --help
```

>**A word about tsconfig.json** - *tsconfig.json* file uses *files* array to find the TypeScript source files to compile. Manually keeping updating the *files* array when new TypeScript files are created or deleted is a tedious task nobody would want to do. Fortunately, editor plugins like [atom-typescript](https://atom.io/packages/atom-typescript) and [ArcticTypescript for Sublime](https://github.com/Phaiax/ArcticTypescript) provide a *filesGlob* extension that takes care of this automatically. This extenstion will eventually make way into *tsconfig.json* [officially](https://github.com/Microsoft/TypeScript/issues/1927). In the mean time, make sure that you follow your editor plugin instructions, like for example, saving the *tsconfig.json* file in Sublime after adding or deleting a TypeScript source file.

## License

MIT
