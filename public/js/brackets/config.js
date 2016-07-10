module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('brackets', {
      url: '/',
      template: '<bracket></bracket>',
      parent: 'loggedIn'
    });
};
module.exports.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];