const { series, parallel } = require('gulp');
const gulp = require('gulp');

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app');
const { dependenceCSS, dependenceFonts } = require('./gulpTasks/dependencies');
const { monitorFiles, server } = require('./gulpTasks/server');

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(dependenceCSS, dependenceFonts)
    ),
    server,
    monitorFiles
);