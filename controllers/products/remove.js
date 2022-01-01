const productsOperations = require("../../model/products");
const { NotFound } = require("http-errors");

const remove = async (req, res) => {
  const { id } = req.params;
  const result = productsOperations.removedById(id);
  if (!result) {
    throw NotFound(`Product with id=${id} not found`);
  }
  res.status(200).json({
    status: "success",
    code: 200,
    message: "product deleted",
    data: {
      result,
    },
  });
};
module.exports = remove;
