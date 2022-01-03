const express = require("express");
const router = express.Router();

const { validation, ctrlWrapper } = require("../../middlewares");
const contactSchema = require("../../schemas");
const { contacts: ctrl } = require("../../controllers");

const validationMiddleware = validation(contactSchema); //
//! controllers
router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", ctrlWrapper(ctrl.addContact));

router.put("/", ctrlWrapper(ctrl.updateById));

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

module.exports = router;
