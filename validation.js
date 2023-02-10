const Joi = require('@hapi/joi');

//Register Validation 
const registerValidation = (data) => {
    const val_schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    return val_schema.validate(data);
}

//Login Validation
const loginValidation = (data) => {
    const val_schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    return val_schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;