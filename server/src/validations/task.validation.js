import Joi from 'joi';

const show = {
    params: Joi.object().keys({
        id: Joi.number().integer().min(0).required(),
    }),
};

const store = {
    body: Joi.object().keys({
        title: Joi.string().min(3).max(255).uppercase({ force: true }).required(),
        end_date: Joi.date().raw().iso().required()
    }),
};

const update = {
    params: Joi.object().keys({
        id: Joi.number().integer().min(0).required(),
    }),
    body: Joi.object().keys({
        title: Joi.string().min(3).max(255).uppercase({ force: true }).optional(),
        end_date: Joi.date().raw().iso().optional()
    }).min(1),
};

export default {
    show,
    store,
    update
};
