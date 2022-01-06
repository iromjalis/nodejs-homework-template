const { NotFound } = require("http-errors");

// const contactsOperations = require("../../model/contacts");
const { Contact } = require("../../models");

const getById = async (req, res) => {
  const { id } = req.params;
  // const result = await contactsOperations.getById(id);
  const result = await Contact.findOne({ _id: id }); //findById(id)
  if (!result) {
    throw new NotFound(`contact with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getById;
