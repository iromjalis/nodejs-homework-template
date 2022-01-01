const getAll = require("./getAll");
const updateFunction = require("./updateFunction");

const removedById = async (id) => {
  const products = getAll();
  const idx = products.findIndex((item) => item.id === id);
  if (!idx) {
    return null;
  }
  const [removedProduct] = products.splice(idx, 1);
  await updateFunction(products);
  return removedProduct;
};
module.exports = removedById;
