const handleSignin = (User) => (req,res) => {
    const {email,password} = req.body;
    User.findOne({
        "email": email,
        "password": password
    })
    .then(user => {
        if(user)
            res.json(user)
        else
            res.status(400).json('Wrong email or password')
    }) 
    .catch(err => res.status(400).json(err))
}

module.exports = handleSignin; 

// {
// 	"email": "esmail@gmail.com",
// 	"password": "123"
// }