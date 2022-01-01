const getAll = require("./listContacts");
const updateFunction = require("./updateFunction");

const removedById = async (id) => {
  const contacts = getAll();
  const idx = contacts.findIndex((item) => item.id === id);
  if (!idx) {
    return null;
  }
  const [removedProduct] = contacts.splice(idx, 1);
  await updateFunction(contacts);
  return removedProduct;
};
module.exports = removedById;
