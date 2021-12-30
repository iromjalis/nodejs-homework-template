/* eslint-disable semi */
/* eslint-disable quotes */
const fs = require("fs/promises");

const contactsPath = require("./contactsPath");
const listContacts = require("./listContacts");

const removeContact = async (contactId) => {
  const contactsList = await listContacts();
  const idx = await contactsList.findIndex((el) => el.id === +contactId);

  if (idx === -1) {
    return null;
  }

  const removedContact = await contactsList.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contactsList));

  return removedContact;
};

module.exports = removeContact;
