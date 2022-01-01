const contactsOperations = require("../../model/contacts");
const { NotFound } = require("http-errors");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = contactsOperations.removedById(id);
  if (!result) {
    throw NotFound(`Contact with id=${id} not found`);
  }
  res.status(200).json({
    status: "success",
    code: 200,
    message: "contact deleted",
    data: {
      result,
    },
  });
};
module.exports = removeContact;
