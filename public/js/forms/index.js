const angular = require('angular');
const uiBootstrap = require('angular-messages');

const moduleName = "forms";

angular.module(moduleName, ['ngMessages'])
  .directive('matches', require('./matches-validator'))
  .directive('ngModel', require('./has-error'))
  .component('formErrors', require('./errors'));

module.exports = moduleName;