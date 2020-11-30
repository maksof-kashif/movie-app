const express = require('express');
const app =  express();

var movieRoutes = require('./movie');
app.use('/movie', movieRoutes);

module.exports = app;