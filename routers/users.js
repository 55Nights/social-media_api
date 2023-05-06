const express = require('express');

router = express.Router();

router.post('/signin', (req, res) => {
   
    res.send('POST /users');
  });
  
  router.post('/login', (req, res) => {
   
    res.send('POST /products');
  });
  
  module.exports = router;