'use strict';

const gulp = require('gulp');

gulp.task('default', () => {
	gulp.start('build');
});

gulp.task('build', ['clean', 'copy', 'sass', 'scripts', 'imagemin']);

gulp.task('local', ['clean', 'copy', 'sass', 'scripts', 'copyImages', 'connect']);
