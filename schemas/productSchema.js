const Joi = require("joi");
const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  location: Joi.string().required(),
});
module.exports = productSchema;