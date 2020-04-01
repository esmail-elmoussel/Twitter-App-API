const getTweet = (Tweet) => (req,res) => {
    Tweet.findOne({ _id: req.params.id})
    .then(tweet => res.json(tweet))
    .catch(err => res.status(400).json(err))
}

module.exports = getTweet;