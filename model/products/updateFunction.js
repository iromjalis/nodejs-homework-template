const fs = require("fs/promises");
const filePath = require("./filePath");

const updateFunction = async (data) => {
  await fs.writeFile(filePath, JSON.stringify(data));
};
module.exports = updateFunction;
