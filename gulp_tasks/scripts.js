/*eslint-disable no-console*/
/*eslint-disable strict */
'use strict';


const gulp = require('gulp');
const gulpESLint = require('gulp-eslint');
const gulpNotify = require('gulp-notify');
const gulpPlumber = require('gulp-plumber');
const gulpSourceMaps = require('gulp-sourcemaps');
const gulpJspm = require('gulp-jspm');
const CONSTS = require('./constants');
const gulpConnect = require('gulp-connect');


gulp.task('compress', () => {
	return gulp.src([CONSTS.JS_SRC + 'main.js'])
	.pipe(gulpSourceMaps.init())
	.pipe(gulpJspm({selfExecutingBundle: true}))
	.pipe(gulpSourceMaps.write())
	.pipe(gulp.dest(CONSTS.JS_DEST))
	.pipe(gulpConnect.reload());
});

gulp.task('eslint', () => {
	return gulp.src([CONSTS.JS_SRC + '**/*.js', CONSTS.GULPFILE, CONSTS.GULPTASKS + '**/*.js'])
	.pipe(gulpPlumber({errorHandler: gulpNotify.onError('ESLint Error: <%= error.message %>')}))
	.pipe(gulpESLint())
	.pipe(gulpESLint.format())
	.pipe(gulpESLint.failAfterError());
});



gulp.task('scripts',  ['eslint', 'compress']);
