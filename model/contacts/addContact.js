const { v4 } = require("uuid");
const listContacts = require("./listContacts");
const updateFunction = require("./updateFunction");

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = { id: v4(), ...data };

  contacts.push(newContact);
  await updateFunction(contacts);
  return newContact;
};

module.exports = addContact;
