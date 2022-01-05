const contactOperations = require("../../model/contacts");

const addContact = async (req, res) => {
  const result = await contactOperations.addContact(req.body);

  res.status(201).json({
    stasus: "success",
    code: 201,
    data: {
      result,
    },
  });
};
module.exports = addContact;
