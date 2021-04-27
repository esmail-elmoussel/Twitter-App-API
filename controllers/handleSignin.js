const handleSignin = (User, bcrypt) => (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (bcrypt.compareSync(password, user.password)) res.json(user);
      else res.status(400).json("Wrong Password");
    })
    .catch((err) => res.status(400).json(err));
};

module.exports = handleSignin;
