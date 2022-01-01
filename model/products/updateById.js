const getAll = require("./getAll");
const updateFunction = require("./updateFunction");

const updateById = async (id, data) => {
  const products = await getAll();
  const idx = products.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  products[idx] = { ...data, id };
  await updateFunction(products);
  return products[idx];
};
module.exports = updateById;
