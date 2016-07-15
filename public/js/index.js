const angular = require('angular');
const ngCookies = require('angular-cookies');
const uib = require('angular-bootstrap'); 

const app = angular.module('app', [
  'ngCookies',
  'ui.bootstrap',
  require('./authentication'),
  require('./alerts'),
  require('./brackets'),
  require('./games'),
  require('./teams'),
  require('./nav')
]);

app.controller('AppController', require('./app.controller'))
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);

