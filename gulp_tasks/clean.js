'use strict';
const gulp = require('gulp');
const del = require('del');

const CONSTS = require('./constants');

gulp.task('clean',  () => {
    return del.sync([CONSTS.DEST]);
});
