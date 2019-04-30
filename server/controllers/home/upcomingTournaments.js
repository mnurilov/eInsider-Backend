const request = require('superagent');

//Put this token in a separate file and git ignore it but for now WEEEEE
const token = 'K-vNqWhG9uYGlPgD-SunEJu9bLZNfw_uOBi_2rGPgIp7b56V5lM';

const setup = () => {

  let upcomingTournaments = {}; 
  
  const logEndpoint = (req, res, next) => {
    console.log("You have hit [GET] /home endpoint");
    next();
  };

  const GetNextUpcomingTournamentLol = (req, res, next) => {
    request
    .get(`https://api.pandascore.co/lol/tournaments/upcoming?sort=begin_at&token=${token}`)
    .set('Accept', 'application/json')
    .then(res => {
      upcomingTournaments["lol"] = {
        Game: "League of Legends",
        Tournament_Name: res.body[0].name,
        Start_Time: res.body[0].begin_at,
        End_Time: res.body[0].end_at,
        League_Name: res.body[0].league.name,
        Serie_Name: res.body[0].serie.name
      };
      next();
    })
    .catch(err => {
      console.log(`Failed get lol upcoming tournament data ${err.message}`);
    });
  };

  const GetNextUpcomingTournamentDota2 = (req, res, next) => {
    request
    .get(`https://api.pandascore.co/dota2/tournaments/upcoming?sort=begin_at&token=${token}`)
    .set('Accept', 'application/json')
    .then(res => {
      upcomingTournaments["dota2"] = {
        Game: "Dota 2",
        Tournament_Name: res.body[0].name,
        Start_Time: res.body[0].begin_at,
        End_Time: res.body[0].end_at,
        League_Name: res.body[0].league.name,
        Serie_Name: res.body[0].serie.name
      };
      next();
    })
    .catch(err => {
      console.log(`Failed get dota2 upcoming tournament data ${err.message}`);
    });
  };

  const GetNextUpcomingTournamentCSGO = (req, res, next) => {
    request
    .get(`https://api.pandascore.co/csgo/tournaments/upcoming?sort=begin_at&token=${token}`)
    .set('Accept', 'application/json')
    .then(res => {
      upcomingTournaments["csgo"] = {
        Game: "Counter-Strike: Global Offensive",
        Tournament_Name: res.body[0].name,
        Start_Time: res.body[0].begin_at,
        End_Time: res.body[0].end_at,
        League_Name: res.body[0].league.name,
        Serie_Name: res.body[0].serie.name
      };
      next();
    })
    .catch(err => {
      console.log(`Failed get csgo upcoming tournament data ${err.message}`);
    });
  };

  const GetNextUpcomingTournamentOW = (req, res, next) => {
    request
    .get(`https://api.pandascore.co/ow/tournaments/upcoming?sort=begin_at&token=${token}`)
    .set('Accept', 'application/json')
    .then(res => {
      upcomingTournaments["ow"] = {
        Game: "Overwatch",
        Tournament_Name: res.body[0].name,
        Start_Time: res.body[0].begin_at,
        End_Time: res.body[0].end_at,
        League_Name: res.body[0].league.name,
        Serie_Name: res.body[0].serie.name
      };
      next();
    })
    .catch(err => {
      console.log(`Failed get ow upcoming tournament data ${err.message}`);
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
    GetNextUpcomingTournamentLol,
    GetNextUpcomingTournamentDota2,
    GetNextUpcomingTournamentCSGO,
    GetNextUpcomingTournamentOW, 
    sendResponse
  ];
};

module.exports = setup;