const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// creating user schema
const userSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    username: {
        type: String,
        required: [true,'Username is required!']
    },
    email: {
        type: String,
        required: [true,'Email is required!'],
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: [true,'Password is required!'],
        minlength: 1,
        maxlength: 15
    } ,
    followers: [String],
    following: [String],
    tweetsId: [{ type: String, ref: 'Tweet' }]
})

// creating comment schema
const commentSchema = new Schema ({
    owner: String,
    content: String,
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
    userId: { type: String, ref: 'User' },
    content: String,
    comments: [commentSchema],
    likes: {
        type: Number,
        default: 0
    },
    date: { 
        type: Date,
        default: Date.now 
    }
})

const Tweet = mongoose.model('Tweet', tweetSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    User: User,
    Tweet: Tweet
}