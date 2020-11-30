//Movie model
const mongoose = require('mongoose')
//const mongoose = require('mongoose)

const commentsSchema = new mongoose.Schema({
    name:{
        type: String
    },
    date:{
        type: Date
    },
    movie_id:{
        type: String
    },
    text:{
        type: String
    },
    email: {
        type: String
    }

}, {collection: 'comments'});

const comments = mongoose.model('comments', commentsSchema)

module.exports = comments