const fs = require("fs/promises");
const { v4 } = require("uuidv4");

const path = require("./path");
const listContacts = require("./listContacts");
// const updateContact = require("./updateContact");
const { constants } = require("crypto");

const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = { ...body, id: v4() };

  await contacts.push(newContact);
  // await updateContact(contacts);
  await fs.writeFile(path, JSON.stringify(constants));

  return newContact;
};

module.exports = addContact;
