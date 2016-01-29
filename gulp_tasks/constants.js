'use strict';

const RANDOM_PORT = 35729 - 50 + parseInt(Math.random() * 100, 10); // Randomize port for livereload.

module.exports = {
    BROWSER_CONFIG: ['> 1%', 'IE 10'],
    CSS_SRC: './src/sass/',
    CSS_DEST: './public/css/',
    DEST: './public/',
    FONT_SRC: './src/fonts/',
    GULPFILE: 'gulpfile.js',
    GULPTASKS: './gulp_tasks/',
    IMG_SRC: './src/images/',
    IMG_DEST: './public/images/',
    JS_SRC: './src/js/',
    JS_DEST: './public/js/',
    LIVERELOAD_PORT: process.env.LIVERELOAD_PORT || RANDOM_PORT,
    NODE_ENV: process.env.NODE_ENV,
    PORT: 9000,
    SRC: './src/'
};
