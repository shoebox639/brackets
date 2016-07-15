const angular = require('angular');

const moduleName = 'nav';
const mod = angular.module(moduleName, [
  require('../brackets')
]);

mod.component('navigation', require('./nav.component'));

module.exports = moduleName;

