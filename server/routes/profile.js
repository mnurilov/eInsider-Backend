const express = require('express');
const { profile } = require('../controllers');

const setup = context => {
  const controller = profile(context);
  
  const router = express.Router();

  // Attaches middleware to route
  router.get('/', controller);

  return router;
}

module.exports = setup;