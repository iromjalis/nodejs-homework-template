const express = require("express");
const router = express.Router();

const { validation, ctrlWrapper } = require("../../middlewares");
const productSchema = require("../../schemas");
const { products: ctrl } = require("../../controllers");

const validationMiddleware = validation(productSchema); //
//! controllers
router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validationMiddleware, ctrlWrapper(ctrl.add));

router.put("/:id", validationMiddleware, ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.remove));

module.exports = router;
