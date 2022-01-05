const { NotFound } = require("http-errors");

const { Contact } = require("../../models");

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const result = await Contact.findByIdAndUpdate(id, { status }, { new: true }); //возвращает старое без new
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateStatusContact;
