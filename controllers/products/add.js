const productsOperations = require("../../model/products");
const productSchema = require("../../schemas");

const add = async (req, res) => {
  const { error } = productSchema.validate(req.body);

  if (error) {
    error.status = 400;
    throw error;
  }

  const result = await productsOperations.add(req.body);
  res.status(201).json({
    stasus: "success",
    code: 201,
    data: {
      result,
    },
  });
};
module.exports = add;
