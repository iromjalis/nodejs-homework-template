const listContacts = require("./listContacts");
const updateContacts = require("./updateFunction");

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const idx = await contacts.findIndex((el) => el.id === contactId);

  if (idx === -1) {
    return null;
  }

  contacts[idx] = { id, ...body };
  await updateContacts(contacts);
  return contacts[idx];
};

module.exports = updateContact;
