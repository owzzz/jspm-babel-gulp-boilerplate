'use strict';
/*eslint-disable no-console*/

const gulp = require('gulp');
const gulpESLint = require('gulp-eslint');
const gulpNotify = require('gulp-notify');
const gulpPlumber = require('gulp-plumber');
const gulpSourceMaps = require('gulp-sourcemaps');
const gulpConcat = require('gulp-concat');
const gulpUglify = require('gulp-uglify');
const CONSTS = require('./constants');
const gulpUtil = require('gulp-util');


gulp.task('compress', () => {
    return gulp.src([CONSTS.JS_SRC + '**/*.js'])
    .pipe(gulpSourceMaps.init())
    .pipe(gulpConcat('main.min.js'))
    .pipe(gulpUglify().on('error', gulpUtil.log))
    .pipe(gulpSourceMaps.write())
    .pipe(gulp.dest(CONSTS.JS_DEST));
});

gulp.task('eslint', () => {
    return gulp.src([CONSTS.JS_SRC + '**/*.js', CONSTS.GULPFILE, CONSTS.GULPTASKS + '**/*.js'])
    .pipe(gulpPlumber({errorHandler: gulpNotify.onError('ESLint Error: <%= error.message %>')}))
    .pipe(gulpESLint())
    .pipe(gulpESLint.format())
    .pipe(gulpESLint.failAfterError());
});



gulp.task('scripts',  ['eslint', 'compress']);
