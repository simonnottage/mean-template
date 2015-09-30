/**
 * Module dependencies.
 */
var express = require("express");
var app = express();

exports.run = function() {
    app.listen(3000, function() {
       console.log('listening...') ;
    });
};