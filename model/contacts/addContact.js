const listContacts = require("./listContacts");
const { v4 } = require("uuid");
const updateFunction = require("./updateFunction");

const addContact = async (data) => {
  console.log("data: ", data);
  const contacts = await listContacts();
  const newContact = { id: v4(), ...data };

  contacts.push(newContact);
  await updateFunction(contacts);
  return newContact;
};

module.exports = addContact;
