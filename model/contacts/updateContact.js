/* eslint-disable semi */
/* eslint-disable quotes */
const fs = require("fs/promises");

const contactsPath = require("./contactsPath");
const listContacts = require("./listContacts");

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const idx = await contacts.findIndex((el) => el.id === Number(contactId));

  if (idx === -1) {
    return null;
  }

  contacts[idx] = { ...contacts[idx], ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts[idx];
};

module.exports = updateContact;
