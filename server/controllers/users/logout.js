const _ = require('lodash');

const setup = (context) => {  

  const logEndpoint = (req, res, next) => {
    console.log("\n\n\n\n\n\n\n\n\n\n");
    console.log("You have hit [DELETE] /users/logout endpoint");
    console.log("SESSION: \n", req.session);

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
    console.log("SESSION BEFORE LOGOUT : \n", req.session);

    req.session = null;
    console.log('logged out successfully')
    res
    .status(200)
    .send('logged out successfully');

    console.log("SESSION AFTER LOGOUT : \n", req.session);
  };
  
  return [
    logEndpoint,
    checkIfSessionExists,
    sendResponse
  ];
};

module.exports = setup;