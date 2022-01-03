const listContacts = require("./listContacts");
const updateFunction = require("./updateFunction");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }

  const newContacts = contacts.filter((_, index) => index !== idx);
  await updateFunction(newContacts);
  return contacts[idx];
};

module.exports = removeContact;
