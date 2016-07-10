const angular = require('angular');

const moduleName = 'teams';
angular.module(moduleName, [])
  .component('team', require('./team.component'))
  .service('teamService', require('./team.service'));

module.exports = moduleName;

