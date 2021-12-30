const contactOperations = require("../../model/contacts");
const { productSchema } = require("../../validation");

const addContact = async (req, res, next) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "missing required name field",
      });
      // error.status = 400;
      // error.message = "missing required name field";
      // throw error;
    }
    const newContact = await contactOperations.addContact(req.body);

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        newContact,
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = addContact;
