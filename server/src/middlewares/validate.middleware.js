import Joi from 'joi';
import httpStatus from 'http-status';
import ApiError from '../helpers/error.helper';
import pick from '../helpers/pick.helper';

const validate = (schema) => async (req, res, next) => {
    const validSchema = pick(schema, ['params', 'query', 'body']);
    const object = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' }, abortEarly: false })
        .validate(object);
    if (error) {
        const errorMessage = error.details
            .map((details) => details.message)
            .join(', ');
        next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
    } else {
        Object.assign(req, value);
        next();
    }
};

export default validate;
