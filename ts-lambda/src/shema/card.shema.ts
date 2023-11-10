import * as Joi from 'joi';
const currentYear = new Date().getFullYear();
const validEmailDomains = ['gmail.com', 'hotmail.com', 'yahoo.es'];

const customEmailValidator = (value: string, helpers: Joi.CustomHelpers) => {
    const domain = value.split('@')[1];
    if (!validEmailDomains.includes(domain)) {
        return helpers.error('any.invalid');
    }
    return value;
};

export const schemaCard = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'es'] } })
        .custom(customEmailValidator)
        .required(),
    card_number: Joi.string().creditCard().required(),
    cvv: Joi.string().when('card_number', {
        is: /^4[0-9]{12}(\d{3})?$/, // Visa or Mastercard
        then: Joi.string().length(3).valid('123'),
        otherwise: Joi.string().length(4).valid('4532') // Amex
    }).required(),
    expiration_year: Joi.number().integer().min(currentYear).max((currentYear + 5)).required(),
    expiration_month: Joi.number().integer().min(1).max(12).required()
});

