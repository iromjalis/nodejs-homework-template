const { Unauthorized } = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  //   if (user) {
  //     throw new Unauthorized('Email is wrong');
  //     }
  //     const passCompare = bcrypt.compare(password, user.password);
  //     const (!passCompare){
  //         throw new Unauthorized('Password is wrong')
  //     }
  /*    userSchema.methods.comparePassword = function (password) {
      return bcrypt.compareSync(password, this.password);
    };
*/
  if (!user || !user.comparePassword(password)) {
    throw new Unauthorized("Email or password is wrong");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    status: "success",
    code: 200,
    data: {
      token,
    },
  });
};

module.exports = login;
