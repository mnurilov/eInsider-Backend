const express = require('express');
const { signup } = require('../controllers');

const setup = (context) => {
  const controller = signup(context);
  
  const router = express.Router();

  // Attaches middleware to route
  router.post('/', controller);

  return router;
}

module.exports = setup;