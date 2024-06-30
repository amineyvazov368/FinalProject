const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi)

const MessageSchemaValidation = Joi.object({
    name: Joi.string().min(3).required(),
    phone: Joi.number().min(10).max(500).required(),
    time: Joi.number().min(3).required(),
    barber: Joi.string().min(3).required(),
  
});

module.exports = MessageSchemaValidation;