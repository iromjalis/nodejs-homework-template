const contactsOperations = require("../../model/products");
const contactSchema = require("../../schemas");

const addContact = async (req, res) => {
  const { error } = contactSchema.validate(req.body);

  if (error) {
    error.status = 400;
    throw error;
  }

  const result = await contactsOperations.add(req.body);
  res.status(201).json({
    stasus: "success",
    code: 201,
    data: {
      result,
    },
  });
};
module.exports = addContact;
