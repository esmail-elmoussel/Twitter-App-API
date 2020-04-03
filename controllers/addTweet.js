const addTweet = (User,Tweet) => (req,res) => {
    const { username } = req.params
    const { content } = req.body
    // check if user is exist
    User.findOne({ username: username })
    .then(user => {
        if(user){
            // if exist create a new tweet
            Tweet.create({
                username: username,  // add the username to the tweet
                content: content
            })
            .then(newTweet => res.json(newTweet))
            .catch(err => res.status(400).json(err.message));
        } else {
            res.json('please signin first!')
        }    
    })
    .catch(err => res.status(400).json(err));
}

module.exports = addTweet;