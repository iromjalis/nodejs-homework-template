const contactOperations = require("../../model/contacts");

const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactOperations.removeContact(contactId);
    if (!result) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: `Contact with id=${contactId} not found`,
      });
    }
    res.json({
      status: "success",
      code: 200,
      message: "Contact deleted",
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = removeContact;
