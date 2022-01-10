const { User } = require("../../models");
// const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { Conflict } = require("http-errors");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exists`);
  }
  const avaratURL = gravatar.url(email);
  const newUser = new User({ name, email, avaratURL });
  const { subscription } = await User.create(newUser);

  //сохраняем хэшированный пароль
  newUser.setPassword(password);
  newUser.save();

  const result = await User.create({ name, email });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: { name, email, avaratURL },
    },
  });
};

module.exports = register;
