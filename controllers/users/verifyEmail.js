const { User } = require("../../models");
const { NotFound } = require("http-errors");
const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken }); //есть ли в базе token с таким email
  if (!user) {
    throw NotFound();
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });

  res.json({
    message: "Verify success",
  });
};
module.exports = { verifyEmail };
