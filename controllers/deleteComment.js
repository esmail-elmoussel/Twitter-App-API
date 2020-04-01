const deleteComment = (Tweet) => (req,res) => {
    Tweet.findOneAndDelete({ _id: req.params.id })
    .then(deletedTweet => res.json(deletedTweet))
    .catch(err => res.status(404).json(err))
}

module.exports = deleteComment; 