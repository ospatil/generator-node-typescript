var gulp    = require('gulp');
var tslint  = require('gulp-tslint');
var exec    = require('child_process').exec;
var jasmine = require('gulp-jasmine');
var gulp    = require('gulp-help')(gulp);
var tsconfig = require('gulp-tsconfig-files');
var dotbin  = require('dotbin');

var tsFilesGlob = (function(c) {
  return c.filesGlob || c.files || '**/*.ts';
})(require('./tsconfig.json'));

gulp.task('tslint', 'Lints all TypeScript source files', function(){
  return gulp.src(tsFilesGlob)
  .pipe(tslint())
  .pipe(tslint.report('verbose'));
});

gulp.task('build', 'Compiles all TypeScript source files', ['tsconfig_files'], function (cb) {
  exec('tsc', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('test', 'Runs the Jasmine test specs', ['build'], function () {
    return gulp.src('test/*.js')
        .pipe(jasmine());
});

gulp.task('tsconfig_files', 'Update files section in tsconfig.json', function () {
  var src = require('./tsconfig.json').filesGlob;
  if (typeof src !== 'undefined') {
     gulp.src(src).pipe(tsconfig());
  }
});

