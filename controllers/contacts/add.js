// const contactsOperations = require("../../model/contacts");
const { Contact } = require("../../models");

const add = async (req, res) => {
  // const result = await Contact.add(req.body);
  const result = await Contact.create(req.body);

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = add;
