const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");
const { contactSchema, statusFavoriteSchema } = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");

const validateMiddleware = validation(contactSchema);
/*
validateMiddleware = (req, res, next)=> {
        const {error} = contactSchema.validate(req.body);
        if(error){
            error.status = 400;
            next(error);
        }
        next()
    }
*/
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validateMiddleware, ctrlWrapper(ctrl.add));

router.put("/:id", validateMiddleware, ctrlWrapper(ctrl.updateById));

router.patch(
  "/:id/favorite",
  validation(statusFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;
