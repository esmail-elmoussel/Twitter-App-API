const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// creating comment schema
const commentSchema = new Schema ({
    owner: String,
    content: {
        type: String,
        required: [true,'comment content is required!']
    },
    likes: {
        type: Number,
        default: 0
    },
    date: { 
        type: Date,
        default: Date.now 
    }
})

// creating tweet schema
const tweetSchema = new Schema ({
    username: { type: String, ref: 'User' },
    content: {
        type: String,
        required: [true,'tweet content is required!']
    },
    comments: [commentSchema],
    likes: {
        type: Number,
        default: 0
    },
    likedBy: {
        type: [String]
    },
    date: { 
        type: Date,
        default: Date.now 
    }
})

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;


// const tweetSchema = new Schema ({
//     username: String,
//     content: String,
//     comments: [{
//         owner: String,
//         content: String,
//         likes: Number,
//         date: Date
//     }],
//     likes: Number,
//     date: Date
// })