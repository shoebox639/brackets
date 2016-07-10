const teams = require('./mongo-service').get('teams');

const service = {
  teams, 

  findByName(name) {
    return teams.findOne({ name });
  },

  findById(id) {
    return teams.findById(id);
  },

  findAll() {
    return teams.find({});
  },
};


module.exports = service;