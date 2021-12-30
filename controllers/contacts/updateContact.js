/* eslint-disable semi */
/* eslint-disable quotes */
const contactOperations = require("../../model/contacts");
const { productSchema } = require("../../validation");

const updateContact = async (req, res, next) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        status: "error",
        code: 400,
        message: `missing fields`,
      });
    }

    const { contactId } = req.params;
    const result = await contactOperations.updateContact(contactId, req.body);
    if (!result) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found`,
      });
    }

    res.json({
      status: "success",
      code: 200,
      data: { result },
      result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;
