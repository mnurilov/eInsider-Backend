const request = require('superagent');

//Put this token in a separate file and git ignore it but for now WEEEEE
const token = 'K-vNqWhG9uYGlPgD-SunEJu9bLZNfw_uOBi_2rGPgIp7b56V5lM';

const setup = () => {

  let upcomingTournaments = []; 
  
  const logEndpoint = (req, res, next) => {
    console.log("You have hit [GET] /home/dota2 endpoint");
    next();
  };

  const getUpcomingTournaments = (req, res, next) => {
    request
    .get(`https://api.pandascore.co/dota2/tournaments/upcoming?sort=begin_at&token=${token}`)
    .set('Accept', 'application/json')
    .then(res => {
      res.body.forEach(dota2Tournament => {
        upcomingTournaments.push({
          game: "Dota 2",
          tournamentName: dota2Tournament.name,
          startTime: dota2Tournament.begin_at,
          endTime: dota2Tournament.end_at,
          leagueName: dota2Tournament.league.name,
          serieName: dota2Tournament.serie.name
        });
      });
      next();
    })
    .catch(err => {
      console.log(`Failed get dota2 upcoming tournaments data ${err.message}`);
    });
  };

  const sendResponse = (req, res, next) => {
    console.log("Sending back the following json:\n" + JSON.stringify(upcomingTournaments, null, 2));
    res
    .status(200)
    .json(upcomingTournaments);
  };
  
  return [
    logEndpoint,
    getUpcomingTournaments, 
    sendResponse
  ];
};

module.exports = setup;