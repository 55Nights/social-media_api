const {signin, login} = require('../schema');

const validateSignup = function(req, res, next){
    const { error, value } = signin.validate(req.body);
    
    if (error) {
        return { error: error.details[0].message };
    } else {
        res.send(value)
        next()
  }
}


module.exports = validateSignup