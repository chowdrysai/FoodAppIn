/**
 * Performs validation operation on specified Mangoose schema and objects
 *
 * @method Validate
 * @param {Joi Schema Object} schema the Joi schema against which validation should be performed
 * @param {string} property string incates what to validate from req object
 * @param {string} route used for specific route validation, null for all other routes.
 *
 * @return {} It returns a next() object for further execution
 */
const Validate = (schema, property) => (req, res, next) => {
    // check if the validation need to be done on both params and body
    const isBoth = (typeof (property) === 'string' && property.trim().length > 0 && property === 'all');

    // if validation is all combining the params and body to a single object.
    let object = {};
    if (isBoth) {
        object = { ...req['query'], ...req['params'], ...req['body'] };
    } else if (property === 'body') {
        object = req[property];
    } else {
        object = { ...req['query'], ...req['params'] };
    }

    // validate and return to main route
    const result = schema.validate(object);
    const { error, value } = result;
    const valid = error == null;
    if (valid) {
        // set to returned value if success and body property before calling next
        // Joi seems to deep clone the objects
        // this allows us to make use of Joi methods like `strip()` that manipulates the input
        if (property === 'body') req['body'] = value;
        return next();
    }
    const { details } = error;
    const message = details.map(i => i.message).join(',');
    const validationError = `Validation Error: ${req.originalUrl} - Reason: ${message}`;
    return res.status(400).json({ error: 'Validation Error', message: validationError });
};

// export the method
module.exports = {
    validate: Validate
};
