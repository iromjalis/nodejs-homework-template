const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");
const { registerJoiSchema, loginJoiSchema } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validation(registerJoiSchema),
  ctrlWrapper(ctrl.register)
);
router.post("./login", validation(loginJoiSchema), ctrlWrapper(ctrl.login));
router.post("./logout", auth, ctrlWrapper(ctrl.logout));
// router.post("/signup")
// router.get("/signout")
// router.post("./signin", validation(loginJoiSchema), ctrlWrapper(ctrl.login));

module.exports = router;
