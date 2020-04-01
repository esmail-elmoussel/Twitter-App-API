const handleRegister = (User) => (req,res) => {
    const {username,email,password} = req.body;
    User.create({
        "username": username,
        "email": email,
        "password": password
    })
    .then(newUser => res.json(newUser))
    .catch(err => res.status(400).json(err));
}
module.exports = handleRegister; 



// {
//     "username": "Mongo",
//     "email": "Mongo@gmail.com",
//     "password": "123"
// }