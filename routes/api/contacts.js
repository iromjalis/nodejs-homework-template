const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewares");
// const {contactSchema} = require('../../schemas')
const { joiSchema, favoriteJoiSchema } = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");

// const validateMiddleware = validation(uiredcontactSchema);
const validateMiddleware = validation(joiSchema);

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", auth, validateMiddleware, ctrlWrapper(ctrl.add));

router.put("/:id", validation(joiSchema), ctrlWrapper(ctrl.updateById));

router.patch(
  "/:id/favorite",
  validation(favoriteJoiSchema),
  ctrlWrapper(ctrl.updateStatus)
); //обновляет конкретное поле

router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;
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
