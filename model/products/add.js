const getAll = require("./getAll");
const { v4 } = require("uuid");
const updateFunction = require("./updateFunction");

const add = async (data) => {
  const products = await getAll();
  const newProduct = { ...data, id: v4() };
  products.push(newProduct);
  await updateFunction(products);
  return newProduct;
};

module.exports = add;
