const listContacts = require("./listContacts");
const updateFunction = require("./updateFunction");

const updateById = async (id, data) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { ...data, id };
  await updateFunction(contacts);
  return contacts[idx];
};
module.exports = updateById;
