const db = require('../config/config');
var movies = require('../model/movie');
var comments = require('../model/comments');
const { ObjectId } = require('mongodb');
exports.getMovieList = async (req, res) => {
    try {
        var data = await movies.find().limit(15);
        if (data) return res.json({
            status: 1,
            data: data
        })
    } catch (err) {
        console.log("Error: ", err)
    }
}

exports.getMovieDetails = async (req, res) => {
    try {
        id = req.body.movieId;
        console.log(id);
        var data = await movies.findById(id)
        var commentsData = await comments.aggregate(
            [{ "$match": { "movie_id": ObjectId(id) } }]
        )
        if (data) return res.json({
            status: 1,
            data: data,
            commentsData: commentsData
        })
    } catch (err) {
        console.log(err);
        return res.json({
            status: 0,
            msg: err
        })
    }
}