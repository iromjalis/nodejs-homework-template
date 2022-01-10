const { User } = require("../../models");
// const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { Conflict } = require("http-errors");
const nanoid = require("nanoid");
const { sendEmail } = require("../../helpers");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exists`);
  }
  const avaratURL = gravatar.url(email);
  const verificationToken = nanoid();

  const newUser = new User({ name, email, avaratURL, verificationToken });
  // const { subscription } = await User.create(newUser);

  //сохраняем хэшированный пароль
  newUser.setPassword(password);

  await newUser.save();

  const mail = {
    to: email,
    subject: "Подтверждение email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}" >Подтверждение email</a>`,
  };
  await sendEmail(mail);
  const result = await User.create({ name, email });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: { name, email, avaratURL, verificationToken },
    },
  });
};

module.exports = register;
