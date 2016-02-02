'use strict';

// Image Optimisation Tasks
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const CONSTS = require('./constants');

gulp.task('imagemin', () => {
	return gulp.src(CONSTS.IMG_SRC + '/**/')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest(CONSTS.IMG_DEST));
});
