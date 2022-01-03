const addContact = require("./addContact");
const getContactById = require("./getContactById");
const listContacts = require("./listContacts");
const removeContact = require("./removeContact");
const updateContact = require("./updateContact");
const updateFunction = require("./updateFunction");

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  updateFunction,
  removeContact,
};
