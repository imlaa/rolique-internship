const Joi = require('joi');
const { regexp } = require('../constants');

module.exports = {
    login: Joi.object({
        email: Joi.string()
            .regex(regexp.EMAIL_REGEXP)
            .required(),
        password: Joi.string()
            // .regex(regexp.PASSWORD_REGEXP)
            .required()
    })
};
