const dislikeTweet = (Tweet) => (req,res) => {
    Tweet.findOneAndUpdate({ _id: req.params.id },{
        $inc: { likes: -1 },
        $pull: {likedBy: req.params.username}
    },{new: true})
    .then(data => res.json(data))
    .catch(err => res.json(err));
}

module.exports = dislikeTweet; 