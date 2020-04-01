const handleProfile = (Tweet) => (req,res) => {
    Tweet.find({ username: req.params.username })
    .sort({ date: -1 })
    .then(tweets => {
        res.json(tweets);
    })
    .catch(err => res.status(404).json(err))
}

module.exports = handleProfile; 