const angular = require('angular');
const forms = require('../forms');
const alerts = require('../alerts');
const uiRouter = require('angular-ui-router');

const moduleName = "authentication";

angular.module(moduleName, [forms, alerts, 'ui.router'])
  .config(require('./config'))
  .component('login', require('./login'))
  .component('createAccount', require('./create-account'))
  .service('authService', require('./authentication.service'));

module.exports = moduleName;