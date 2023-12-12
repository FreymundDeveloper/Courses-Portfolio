const gulp = require('gulp');

function monitorFiles(callBack) {
    return callBack();
}

function server(callBack) {
    return callBack();
}

module.exports = {
    monitorFiles,
    server
}