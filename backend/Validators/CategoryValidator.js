const Joi = require('joi');
const CategorySchema = Joi.object({
    "categoryname":Joi.string().required(),
    "linkid":Joi.number().optional()
});
module.exports = CategorySchema;