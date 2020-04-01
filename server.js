const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const Tweet = require('./models/Tweet');

// require controllers
const handleRegister = require('./controllers/handleRegister');
const handleSignin = require('./controllers/handleSignin');
const handleHome = require('./controllers/handleHome');
const addTweet = require('./controllers/addTweet');
const deleteTweet = require('./controllers/deleteTweet');
const updateTweet = require('./controllers/updateTweet');
const handleProfile = require('./controllers/handleProfile');
const getTweet = require('./controllers/getTweet');
const likeTweet = require('./controllers/likeTweet');
const dislikeTweet = require('./controllers/dislikeTweet');
const addComment = require('./controllers/addComment');
const deleteComment = require('./controllers/deleteComment');

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
app.post('/register',handleRegister(User));
app.post('/signin',handleSignin(User));
app.get('/home',handleHome(Tweet));
app.get('/:username',handleProfile(Tweet));
// app.get('/tweet/:id',getTweet(Tweet));
app.post('/tweet/posting/:username',addTweet(User,Tweet));
app.delete('/tweet/deleting/:id',deleteTweet(Tweet));
// app.put('/tweet/updating/:id',updateTweet(Tweet));
app.put('/tweet/likes/:id/:username',likeTweet(Tweet));
app.put('/tweet/dislikes/:id/:username',dislikeTweet(Tweet));
app.put('/tweet/comment/:id',addComment(Tweet));
// app.delete('/tweet/comment/:id',deleteComment(Tweet));

// reset database
app.delete('/delete',(req,res) => User.deleteMany({}).then(res.json('Success')));


app.listen(5000,() => {
    console.log('app is running at port 5000!')
})