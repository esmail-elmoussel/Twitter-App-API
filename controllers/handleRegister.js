const handleRegister = (User, bcrypt) => (req, res) => {
  const { username, email, password } = req.body;
  const hash = bcrypt.hashSync(password);
  User.create({
    username: username,
    email: email,
    password: hash,
  })
    .then((newUser) => res.json(newUser))
    .catch((err) => res.status(400).json(err));
};
module.exports = handleRegister;
