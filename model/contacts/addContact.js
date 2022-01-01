const listContacts = require("./listContacts");
const { v4 } = require("uuid");
const updateFunction = require("./updateFunction");

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = { ...data, id: v4() };
  contacts.push(newContact);
  await updateFunction(contacts);
  return newContact;
};

module.exports = addContact;
