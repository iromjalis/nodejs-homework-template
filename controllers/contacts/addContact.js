const contactOperations = require("../../model/contacts");
// const contactSchema = require("../../schemas");

const addContact = async (req, res) => {
  const body = req.body;
  const result = await contactOperations.addContact(body);
  console.log("ctrl result: ", result);

  res.status(201).json({
    stasus: "success",
    code: 201,
    data: {
      result,
    },
  });
};
module.exports = addContact;
