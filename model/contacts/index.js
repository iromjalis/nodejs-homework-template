/* eslint-disable semi */
/* eslint-disable quotes */
const addContact = require("./addContact");
const listContacts = require("./listContacts");
const removeContact = require("./removeContact");
const updateContact = require("./updateContact");
const getContactById = require("./getContactById");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
