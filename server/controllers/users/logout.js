const _ = require('lodash');

const setup = () => {  

  const logEndpoint = (req, res, next) => {
    console.log("You have hit [DELETE] /users/logout endpoint");
    next();
  };

  const checkIfSessionExists = (req, res, next) => {
    if (_.isEmpty(req.session.username)){
      console.log('cannot logout without an existing session');
      return res
        .status(400)
        .send('cannot logout without an existing session');
    }
    next();
  }

  const sendResponse = (req, res, next) => {
    req.session = null;
    console.log('logged out successfully')
    res
    .status(200)
    .send('logged out successfully');
  };
  
  return [
    logEndpoint,
    checkIfSessionExists,
    sendResponse
  ];
};

module.exports = setup;