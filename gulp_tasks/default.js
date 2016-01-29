'use strict';

const gulp = require('gulp');

gulp.task('default', () => {
    gulp.start('build');
});

gulp.task('local', ['clean', 'copy', 'sass', 'scripts', 'connect']);
