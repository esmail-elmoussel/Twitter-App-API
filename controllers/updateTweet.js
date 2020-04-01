const updateTweet = (Tweet) => (req,res) => {
    Tweet.findOneAndUpdate({ _id: req.params.id },{content: req.body.content},{new:true})
    .then(updatedTweet => res.json(updatedTweet))
    .catch(err => res.status(404).json(err))
}

module.exports = updateTweet; 