const angular = require('angular');

const moduleName = 'team-standings';
angular.module(moduleName, [require('../teams')])
  .component('teamStandings', require('./team-standings.component'));

module.exports = moduleName;

