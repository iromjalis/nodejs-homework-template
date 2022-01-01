const productsOperations = require("../../model/products");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await productsOperations.getById(id);
  if (!result) {
    //   throw NotFound(`Product with id=${id} not found`);
    //   throw createError(404, `Product with id=${id} not found`);
    //! ИЛИ
    res.json({
      status: "error",
      code: 404,
      message: `Product with id=${id} not found`,
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
