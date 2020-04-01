const handleHome = (Tweet) => (req,res) => {
    Tweet.find({})
    .sort({ date: -1 })
    .then(tweets => res.json(tweets))
    .catch(err => res.status(400).json(err))
}

module.exports = handleHome; 