'use strict';

const gulp = require('gulp');
const gulpConnect = require('gulp-connect');
const CONSTS = require('./constants');
const isDev = CONSTS.NODE_ENV !== 'production';

gulp.task('connect', () => {
    gulpConnect.server({
        root: CONSTS.DEST,
        port: CONSTS.PORT,
        livereload: {
            port: CONSTS.LIVERELOAD_PORT
        },
        debug: ((isDev === true) ? true : false)
    });
});
