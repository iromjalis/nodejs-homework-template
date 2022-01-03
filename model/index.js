const fs = require("fs/promises");
const filePath = require("./contacts/contactsPath");
const updateFunction = require("./contacts/updateFunction");

const listContacts = async () => {
  const data = await fs.readFile(filePath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = await contacts.find((item) => item.id === +contactId);

  if (!contact) {
    return null;
  }

  return contact;
};
const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = await contactsList.findIndex((el) => el.id === +contactId);

  if (idx === -1) {
    return null;
  }

  const newContact = contacts.filter((_, index) => index !== idx);
  await updateFunction(newContact);
  return contacts[idx];
};

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = { ...data, id: v4() };
  contacts.push(newContact);
  await updateFunction(contacts);
  return newContact;
};
const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const idx = await contacts.findIndex((el) => el.id === +contactId);

  if (idx === -1) {
    return null;
  }

  contacts[idx] = { ...contacts[idx], ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts[idx];
};
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
