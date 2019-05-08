const request = require('superagent');
const config = require('../../../config.json')
const moment = require('moment');
const _ = require('lodash');

const setup = () => {

  let upcomingTournaments = []; 
  
  const logEndpoint = (req, res, next) => {
    console.log("You have hit [GET] /home/ow endpoint");
    upcomingTournaments = []; 

    next();
  };

  const getUpcomingTournaments = (req, res, next) => {
    request
    .get(`https://api.pandascore.co/ow/tournaments/upcoming?sort=begin_at&token=${config.token}`)
    .set('Accept', 'application/json')
    .then(res => {
      res.body.forEach(owTournament => {
        upcomingTournaments.push({
          game: "Overwatch",
          tournamentName: owTournament.name,
          startTime: !_.isEmpty(owTournament.begin_at) ? moment(owTournament.begin_at).format('MM-DD-YYYY') : null,
          endTime: !_.isEmpty(owTournament.end_at) ? moment(owTournament.end_at).format('MM-DD-YYYY') : null,
          leagueName: owTournament.league.name,
          serieName: owTournament.serie.name
        });
      });
      next();
    })
    .catch(err => {
      console.log(`Failed get ow upcoming tournaments data ${err.message}`);
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