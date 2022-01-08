// const contactsOperations = require("../../model/contacts");
const { Contact } = require("../../models");

const getAll = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  // const contacts = await contactsOperations.getAll();
  const contacts = await Contact.find(
    { owner: _id },
    "",
    { skip, limit: Number(limit) },
    "",
    {
      skip: 0,
      limit: 2,
    }
  ).populate("owner", "_id name email");

  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getAll;
