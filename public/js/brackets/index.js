const angular = require('angular');
const authentication = require('../authentication');
const standings = require('../team-standings');
const uiRouter = require('angular-ui-router');

const moduleName = "brackets";

angular.module(moduleName, [authentication, standings, 'ui.router'])
  .config(require('./config'))
  .service('bracketService', require('./brackets.service'))
  .component('bracket', require('./brackets.component'));

module.exports = moduleName;