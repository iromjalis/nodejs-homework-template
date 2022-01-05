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

module.exports = router;
