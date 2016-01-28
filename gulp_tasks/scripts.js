'use strict';
/*eslint-disable no-console*/
const gulp = require('gulp');
const gulpESLint = require('gulp-eslint');
const gulpNotify = require('gulp-notify');
const gulpPlumber = require('gulp-plumber');
const gulpWait = require('gulp-wait');
const gulpSourceMaps = require('gulp-sourcemaps');
const gulpConcat = require('gulp-concat');
const gulpUglify = require('gulp-uglify');
const CONSTS = require('./constants');


gulp.task('compress', () => {
  return gulp.src([CONSTS.JS_SRC + '**/*.js'])
  	.pipe(gulpWait(3050))
    .pipe(gulpPlumber({errorHandler: gulpNotify.onError('ESLint Error: <%= error.message %>')}))
  	.pipe(gulpESLint())
  	.pipe(gulpESLint.format())
  	.pipe(gulpESLint.failAfterError())
    .pipe(gulpUglify())
    .pipe(gulp.dest(CONSTS.DEST));
});



gulp.task('scripts',  ['compress']);