const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')
const User = require('./models/User');
const Tweet = require('./models/Tweet');

// require controllers
const handleRegister = require('./controllers/handleRegister');
const handleSignin = require('./controllers/handleSignin');
const handleHome = require('./controllers/handleHome');
const addTweet = require('./controllers/addTweet');
const deleteTweet = require('./controllers/deleteTweet');
const handleProfile = require('./controllers/handleProfile');
const likeTweet = require('./controllers/likeTweet');
const dislikeTweet = require('./controllers/dislikeTweet');
const addComment = require('./controllers/addComment');
const updateTweet = require('./controllers/updateTweet');
const handleFollowing = require('./controllers/handleFollowing');
const handleUnfollow = require('./controllers/handleUnfollow');
// const getTweet = require('./controllers/getTweet');
// const deleteComment = require('./controllers/deleteComment');

const app = express();

// connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/twitter-app', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB is not running ya a7a :'));
db.once('open', () => {console.log('MongoDB is running ya som3a!')});

//Middlewares
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res) => {res.send('It is working!')});
app.post('/register',handleRegister(User,bcrypt));
app.post('/signin',handleSignin(User,bcrypt));
app.get('/home',handleHome(Tweet));
app.get('/:username',handleProfile(Tweet));
app.post('/tweet/posting/:username',addTweet(User,Tweet));
app.delete('/tweet/deleting/:id',deleteTweet(Tweet));
app.put('/tweet/updating/:id',updateTweet(Tweet));
app.put('/tweet/likes/:id/:username',likeTweet(Tweet));
app.put('/tweet/dislikes/:id/:username',dislikeTweet(Tweet));
app.put('/tweet/comment/:id',addComment(Tweet));
app.put('/follow/:username',handleFollowing(User));
app.put('/unfollow/:username',handleUnfollow(User));
// app.get('/tweet/:id',getTweet(Tweet));
// app.delete('/tweet/comment/:id',deleteComment(Tweet));

// // reset database
// app.delete('/delete',(req,res) => User.deleteMany({}).then(res.json('Success')));


app.listen(process.env.PORT || 5000,() => {
    console.log(`app is running on port ${process.env.PORT}`);
});