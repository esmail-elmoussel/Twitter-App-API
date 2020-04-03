const handleFollowing = (User) => (req,res) => {
    User.findOne({ username: req.params.username })
    .then(user => {
        user.following.forEach(follower => {
            if(follower === req.body.username)
                res.json('Already following!')
        });
        User.findOneAndUpdate({ username: req.params.username },{
            $push: { following: req.body.username }
        },{new: true})
        .then(newUser => {
            res.json(newUser);
        })
        .catch(err => res.status(404).json(err))
    })
    .catch(err => res.status(404).json(err))

}

module.exports = handleFollowing;