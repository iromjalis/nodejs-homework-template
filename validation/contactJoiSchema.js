/* eslint-disable semi */
/* eslint-disable quotes */
const Joi = require("joi");
const productSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});
module.exports = productSchema;