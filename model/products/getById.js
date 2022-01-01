const getAll = require("./getAll");

const getById = async (productId) => {
  const products = await getAll();
  const result = products.find((item) => item.id === productId);
  if (!result) {
    return null;
  }
  return result;
};
module.exports = getById;
