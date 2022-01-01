const { NotFound } = require("http-errors");
const productsOperations = require("../../model/products");

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = productsOperations.updateById(id, req.body);
  if (!result) {
    throw NotFound(`Product with id=${id} not found`);
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: { result },
  });
};
module.exports = updateById;
