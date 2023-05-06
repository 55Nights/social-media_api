const express = require('express');
const {signin, login} = require('../schema');
router = express.Router();

router.post('/signin', (req, res) => {
  const { error, value } = signin.validate(req.body);

  if (error) {
    res.status(400).json({ error: error.details[0].message });
  } else {
    res.send(value);
  }
   
  });
  
  router.post('/login', (req, res) => {
    const { error, value } = login.validate(req.body);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
    } else {
      res.send(value);
    }
   
  });
  
  module.exports = router;