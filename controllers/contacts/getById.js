const contactOperations = require("../../model/contacts");
const { NotFound } = require("http-errors");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactOperations.getContactById(contactId);

    if (!result) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: `Contact with id=${contactId} not found`,
      });
      // throw new NotFound(`Contact with id=${contactId} not found`);
      //! или
      // const error = new Error(`Contact with id=${contactId} not found`);
      // error.status = 404;
      // throw error;
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

module.exports = getById;
