const likeTweet = (Tweet) => (req,res) => {
    let alreadyLiked = false
    Tweet.findOne({ _id: req.params.id })
    .then(tweet => {
        tweet.likedBy.forEach(likedBy => {
            if(likedBy === req.params.username)
                alreadyLiked = true
        })
        if(!alreadyLiked){
            Tweet.findOneAndUpdate({ _id: req.params.id },{
                $inc: { likes: 1 },
                $push: {likedBy: req.params.username}
            },{new: true})
            .then(tweet => res.json(tweet))
            .catch(err => res.json(err));
        }
    })
    .catch(err => res.json(err));
}

module.exports = likeTweet; 