const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getById);

router.post("/", ctrl.addContact);

router.put("/:contactId", ctrl.updateContact);

router.delete("/:contactId", ctrl.removeContact);

module.exports = router;
