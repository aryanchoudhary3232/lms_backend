const User = require("../models/User");

async function register(req, res) {
  console.log("..", req.body);
  const { name, email, password } = req.body;

  const user = new User({
    name,
    email,
    password,
  });

  const response = await user.save();

  res.json({
    data: response,
    message: "succesfully registerd",
    success: true,
  });
}

async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.json({ message: "email is invalid" });
  }

  if (user.password != password) {
    res.json({ message: "password is invalid" });
  }

  res.json({ message: "login successful", success: true });
}

module.exports = {
  register,
  login,
};
