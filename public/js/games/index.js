const angular = require('angular');

const moduleName = 'games';
angular.module(moduleName, [])
  .component('game', require('./game.component'));

module.exports = moduleName;

