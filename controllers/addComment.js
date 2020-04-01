const addComment = (Tweet) => (req,res) => {
    Tweet.findOneAndUpdate({ _id: req.params.id },{
        $push: { comments: req.body }
    },{new: true})
    .then(data => res.json(data))
    .catch(err => res.status(404).json(err))
}

module.exports = addComment;