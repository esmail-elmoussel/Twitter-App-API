const handleUnfollow = (User) => (req,res) => {
    User.findOneAndUpdate({ username: req.params.username },{
        $pull: { following: req.body.username }
    },{new: true})
    .then(newUser => {
        res.json(newUser);
    })
    .catch(err => res.status(404).json(err))
}

module.exports = handleUnfollow;