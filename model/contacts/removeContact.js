const fs = require("fs/promises");
const listContacts = require("./listContacts");
const path = require("./path");
// const updateContact = require("./updateContact");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === Number(contactId));

  if (idx === -1) {
    return null;
  }

  // const newContact = contacts.filter((_, index) => index !== idx);
  // await updateContact(newContact);
  const removedContact = await contacts.splice(idx, 1);
  await fs.writeFile(path, JSON.stringify(contacts));

  return removedContact;
};

module.exports = removeContact;
