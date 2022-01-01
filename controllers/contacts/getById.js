const contactsOperations = require("../../model/products");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsOperations.getById(id);
  if (!result) {
    res.json({
      status: "error",
      code: 404,
      message: `Contact with id=${id} not found`,
    });
    return;
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getById;
