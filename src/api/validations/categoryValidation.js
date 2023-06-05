module.exports = (Validator) => (data) =>
    Validator.object({
        name: Validator.string().min(3),
        description: Validator.allow(null),
    }).validate(data, { abortEarly: false });
