const fs = require("fs/promises");
const path = require("./path");

const listContacts = async () => {
  const data = await fs.readFile(path);
  const contacts = JSON.parse(data);

  return contacts;
};
module.exports = listContacts;
