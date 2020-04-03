const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// creating user schema
const userSchema = new Schema ({
    username: {
        type: String,
        required: [true,'Username is required!'],
        unique: true
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
        maxlength: 100
    },
    following: {
        type: [String]
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;



// const userSchema = new Schema ({
//     username: String,
//     email: String,
//     password: String,
//     following: Boolean,
//     tweetsId: [String]
// })