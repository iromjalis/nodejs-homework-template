const { NotFound } = require("http-errors");
const contactOperations = require("../../model/contacts");

const { listContacts } = require("../../model/contacts");
const contactsPath = require("../../model/contacts/contactsPath");

const updateContact = async (req, res) => {
  const { id } = req.params;

  const result = await contactOperations.updateContact(id, req.body);

  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = updateContact;
