const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi)

const SaysSchemaValidation = Joi.object({
  name: Joi.string().min(3).required(),
  about: Joi.string().min(10).max(500).required(),
  src: Joi.string().uri(),
  
});

module.exports = SaysSchemaValidation;