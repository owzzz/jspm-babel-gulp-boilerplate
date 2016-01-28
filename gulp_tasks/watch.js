'use strict';

const gulp = require('gulp');
const gulpLivereload = require('gulp-livereload');
const gulpWatch = require('gulp-watch');
const gulpUtil = require('gulp-util');
const CONSTS = require('./constants');


const watchSass = gulp.watch(CONSTS.CSS_SRC, ['sass-watch']);
const watchScripts = gulp.watch(CONSTS.JS_SRC, ['scripts']);

gulp.task('watch', () => {
  gulpLivereload.listen({
        port: CONSTS.LIVERELOAD_PORT
  });
});

[watchSass, watchScripts].forEach((w) => {
        w.on('change', (e) => {
            gulpUtil.log(e.path, e.type);
        });
    });