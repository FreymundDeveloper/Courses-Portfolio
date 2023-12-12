const gulp = require('gulp');

function dependenceCSS(callBack) {
    return callBack();
}

function dependenceFonts(callBack) {
    return callBack();
}

module.exports = {
    dependenceCSS,
    dependenceFonts
}