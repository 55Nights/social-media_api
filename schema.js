const Joi = require('joi');

const signin = Joi.object({
  firstname: Joi.string().pattern(new RegExp('^[a-zA-Z]+$')).required(),
  lastname: Joi.string().pattern(new RegExp('^[a-zA-Z]+$')).required(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  passwordConfirm: Joi.ref('password')
  });

  const login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    });


  
const postSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required()
});





 module.exports = {
  signin,
  login,
  postSchema
}