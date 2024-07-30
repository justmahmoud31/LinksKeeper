const Joi = require('joi');
const LinksSchema = Joi.object({
    linktitle:Joi.string().required(),
    linkurl:Joi.string().required(),
    linkdescription:Joi.string().optional(),
    categoryid:Joi.number().optional(),
    ispublic:Joi.boolean().required()
});
module.exports = LinksSchema;