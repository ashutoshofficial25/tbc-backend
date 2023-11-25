const joi = require("joi");

export const signupValidation = joi.object({
  name: joi.string().min(3).max(30).required(),
  email: joi.string().email().required(),
});
