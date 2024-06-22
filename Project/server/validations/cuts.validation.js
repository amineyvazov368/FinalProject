const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi)

const CutsSchemaValidation = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(10).max(500).required(),
  src: Joi.string().uri(),
  
});

module.exports = CutsSchemaValidation;