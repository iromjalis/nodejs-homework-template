const contactOperations = require("../../model/contacts");
const { productSchema } = require("../../validation");

const updateContact = async (req, res, next) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: `missing fields`,
      });
    }
    const { contactId } = req.params;
    const result = await contactOperations.updateContact(contactId, req.body);

    if (!result) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found`,
      });
    }
    res.json({
      status: "success",
      code: 200,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;
