const { NotFound } = require("http-errors");
const contactOperations = require("../../model/contacts");

const updateContact = async (req, res) => {
  const { id } = req.params;
  console.log("id: ", id);
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
