const Joi = require('joi');
const addNewSchema = Joi.object({
    judul: Joi.string()
    .min(5)
    .required(),
    content: Joi.string()
    .min(10)
    .required(),
    author: Joi.string()
    .required(),
    category: Joi.string()
    .required(),
});

module.exports = addNewSchema;