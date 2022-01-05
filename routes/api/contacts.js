const express = require("express");
const router = express.Router();
const { NotFound } = require("http-errors");

const { validation, ctrlWrapper } = require("../../middlewares");
const { contactSchema } = require("../../schemas");
const { contacts: ctrl } = require("../../controllers");
const contactsOperations = require("../../model/contacts");

const validateMiddleware = validation(contactSchema);
//! controllers
router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", ctrlWrapper(ctrl.addContact));

router.put("/:id", ctrlWrapper(ctrl.updateContact));

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

// router.put("/:contactId", async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     console.log("contactId: ", contactId);

//     const updateContact = await contactsOperations.updateFunction(
//       contactId,
//       req.body
//     );

//     if (!updateContact) {
//       throw new NotFound();
//     }

//     res.json(updateContact);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
