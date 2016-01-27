'use strct';

const gulp = require('gulp');

gulp.task('default', () => {
	gulp.start('build');
});

gulp.task('local', ['clean', 'copy', 'sass', 'scripts']);

//General Tasks
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
 




gulp.task('default', function() {
  // place code for your default task here
});