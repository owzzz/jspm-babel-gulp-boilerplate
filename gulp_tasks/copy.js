'use strict';

const gulp = require('gulp');
const gulpMinify = require('gulp-minify-html');
const CONSTS = require('./constants');


gulp.task('copy', ['copyTemplates']);

gulp.task('copyTemplates', () => {
	return gulp.src(CONSTS.SRC + '**/*.html')
	.pipe(gulpMinify({ empty: true }))
	.pipe(gulp.dest(CONSTS.DEST));
});

gulp.task('copyImages', () => {
	return gulp.src(CONSTS.IMG_SRC + '**/')
	.pipe(gulp.dest(CONSTS.IMG_DEST));
});

