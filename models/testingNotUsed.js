const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const app = express();

// connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/testing', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB is not running ya a7a :'));
db.once('open', () => {console.log('Testing is running ya som3a!')});

//Midlewares
app.use(bodyParser.json());
app.use(cors());


const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});


const Story = mongoose.model('Story', storySchema);
const Person = mongoose.model('Person', personSchema);


const author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50
});
  
author.save(function (err) {
    if (err) return handleError(err);
  
    const story1 = new Story({
      title: 'Casino Royale',
      author: author._id    // assign the _id from the person
    });
  
    story1.save(function (err) {
        if (err) return handleError(err);
        // thats it!
    });
});


Story.
findOne({ title: 'Casino Royale' }).
populate('author').
exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is %s', story.author.name);
    // prints "The author is Ian Fleming"
});

Story.findOne({ title: 'Casino Royale' }, function(error, story) {
    if (error) {
      return handleError(error);
    }
    console.log(author.name); // prints "Ian Fleming"
});

app.listen(5005,() => {
    console.log('app is running at port 5005!')
})