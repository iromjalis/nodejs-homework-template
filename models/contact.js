const Joi = require("joi");
const { Schema, model } = require("mongoose");

const contactSchema = Schema(
  {
    //описание что в базе
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    // настройки позволяют добавлять версию
    versionKey: false,
    timestamps: true,
  }
);

const Contact = model("contact", contactSchema);

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().required(),
});

const statusFavoriteSchema = Joi.object({
  favorite: Joi.string().valid("true", "false").required(),
});

module.exports = { Contact, joiSchema, statusFavoriteSchema };
