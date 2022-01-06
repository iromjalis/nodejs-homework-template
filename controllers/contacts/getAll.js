// const contactsOperations = require("../../model/contacts");
const { Contact } = require("../../models");

const getAll = async (req, res) => {
  // const contacts = await contactsOperations.getAll();
  const contact = await Contact.find({});
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getAll;
