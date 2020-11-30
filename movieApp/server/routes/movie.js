var express = require('express');
var userRoute = express.Router();
var movieController = require('../controller/movieController');

var router = function(){
    userRoute.get('/getMovieList', movieController.getMovieList);
    userRoute.post('/getMovieDetails', movieController.getMovieDetails);

    return userRoute
}

module.exports = router();