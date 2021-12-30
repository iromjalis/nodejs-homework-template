/* eslint-disable semi */
/* eslint-disable quotes */
const fs = require("fs/promises");
const { v4 } = require("uuidv4");

const path = require("./contactsPath");
const listContacts = require("./listContacts");

const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = { ...body, id: v4() };
  await contacts.push(newContact);
  await fs.writeFile(path, JSON.stringify(contacts));

  return newContact;
};

module.exports = addContact;
