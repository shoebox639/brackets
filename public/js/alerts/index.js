const angular = require('angular');
const forms = require('../forms');

const moduleName = "alerts";

angular.module(moduleName, [])
  .service('alertService', require('./alert.service'));

module.exports = moduleName;