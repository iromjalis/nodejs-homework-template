const productsOperations = require("../../model/products");

const getAll = async (req, res) => {
    const products = await productsOperations.getAll();
    return res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: products,
      },
    });
};
module.exports = getAll;
