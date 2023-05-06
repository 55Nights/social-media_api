const express = require('express');
const {postSchema} = require('../schema');
router = express.Router();

router.get('/', (req, res) => {
  
  res.send("list of posts")
  });
  
  router.post('/create', (req, res) => {
    const { error, value } = postSchema.validate(req.body);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
    } else {
      res.status(201).set('Content-Type', 'application/json').send(value);
    }
    
  });
  router.put('/:id/update', (req, res) => {
    const { error, value } = postSchema.validate(req.body);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
    } else {
      res.status(201).set('Content-Type', 'application/json').send(value["post_id"]= req.params.id);
    }
    
  });

  router.delete('/:id/delete', (req, res) => {
    
      res.status(204).set('Content-Type', 'application/json').send(`You deleted post ${req.params.id}`);
    
  });

  router.post('/:id/comment', (req, res) => {
    
    res.status(201).set('Content-Type', 'application/json').send(`You commented on post ${req.params.id} `);
  
});

router.post('/:id/like', (req, res) => {
    
  res.status(201).set('Content-Type', 'application/json').send(`You commented on post ${req.params.id} `);

});


  module.exports = router;