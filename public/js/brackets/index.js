const angular = require('angular');
const authentication = require('../authentication');
const uiRouter = require('angular-ui-router');

const moduleName = "brackets";

angular.module(moduleName, [authentication, 'ui.router'])
  .config(require('./config'))
  .service('bracketService', require('./brackets.service'))
  .component('bracket', require('./brackets.component'));

module.exports = moduleName;