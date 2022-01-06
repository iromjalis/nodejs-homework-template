const { NotFound } = require("http-errors");

// const contactsOperations = require("../../model/contacts");
const {Contact} = require('../../models')

const updateById = async (req, res) => {
  const { id } = req.params;
  // const result = await contactsOperations.updateById(id, req.body);
  const result = await Contact.findByIdAndUpdate(id, req.body, {new:true}); // без {new:true} вернет старое значение
  if (!result) {
    throw new NotFound(`contact with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateById;
