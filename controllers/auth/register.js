const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const { Conflict } = require("http-errors");
const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exists`);
  }
  const newUser = new User({ name, email, password });
  const { subscription } = await User.create(newUser);
  //сохраняем хэшированный пароль
  newUser.setPassword(password);
  newUser.save();
  const result = await User.create({ name, email, password });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: { name, email, subscription },
    },
  });
};

module.exports = register;
