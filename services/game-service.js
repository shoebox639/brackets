const _ = require('lodash');

const teamService = require('./team-service');
const games = require('./mongo-service').get('games');


const service = {
  games, 

  findByTeam(name) {
    // return games.find({ tea });
  },

  findById(id) {
    return games.findById(id);
  },

  findAll(config) {
    config = config || {};
    const result = games.find({});

    if (config.include === 'team') {
      return result.then((allGames) => {
        return teamService.findAll().then((allTeams) => {
          const byName = _.keyBy(allTeams, 'name');

          return allGames.map((game) => {
            game.teams = game.teams.map(team => byName[team] || team);
            return game;
          });
        });
      });
    }

    return result;
  },
};


module.exports = service;