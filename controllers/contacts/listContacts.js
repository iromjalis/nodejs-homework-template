const contactOperations = require("../../model/contacts");

const listContacts = async (req, res, next) => {
  try {
    const contacts = await contactOperations.listContacts();
    res.json({
      status: "success",
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
    // *сработает следующая функция
    // *app.use((err, req, res, next) => {
    // *res.status(500).json({ message: err.message });
    // *});

    // res.status(500).json({
    //   status: "error",
    //   code: 500,
    //   message: "Not found",
    // });
  }
};

module.exports = listContacts;
