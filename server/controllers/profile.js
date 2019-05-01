const setup = (context) => {
  const logEndpoint = (req, res, next) => {
    console.log("You have hit [GET] /profile endpoint");
    const user = context.models.user;
    user.findAll()
    .then((res) => {
      console.log(res);
    })
    next();
  };

  const sendResponse = (req, res, next) => {
    // console.log("req : " + JSON.stringify(req));
    console.log("req : " + req);
    console.alert("req : " + req);
    res
    .status(200)
    .send('Welcome to profile ' + req.playerName);
  };
  
  return [
    logEndpoint,
    sendResponse
  ];
};

module.exports = setup;