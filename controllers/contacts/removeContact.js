const contactsOperations = require("../../model/contacts");
const { NotFound } = require("http-errors");

const removeContact = async (req, res) => {
  const { id } = req.params;
  console.log("id: ", id);
  const result = await contactsOperations.removeContact(id);
  console.log("result: ", result);
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "contact deleted",
    data: {
      result,
    },
  });
};
module.exports = removeContact;
