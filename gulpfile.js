/**
 * Module dependencies.
 */
var gulp = require("gulp");
var server = require("./app/server");

gulp.task('run-server', function () {
    server.run();
});

gulp.task('default', ['run-server']);