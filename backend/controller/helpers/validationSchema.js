const Joi = require('joi')


const userValidateSchema = Joi.object({
    fname : Joi.string()
        .required(),
    lname : Joi.string()
        .required(),
    email : Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','in'] } })
        .required(),
    password : Joi.string()
        .min(8)
        .required()
})


module.exports = {userValidateSchema}