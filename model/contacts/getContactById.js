/* eslint-disable semi */
/* eslint-disable quotes */
const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = await contacts.find((item) => item.id === Number(contactId));

  if (!contact) {
    return null;
  }

  return contact;
};

module.exports = getContactById;
