class LogoutController {
  constructor(authService, $state) {
    authService.logout();

    $state.go('login');

  }
}

LogoutController.$inject = ['authService', '$state'];


module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('loggedIn', {
      resolve: {
        isLoggedIn: authService => authService.isLoggedIn()
      },
      controller: 'AppController',
      template: '<ui-view class="col-md-12"></ui-view>'
    })
    .state('login', {
      url: '/login',
      template: '<login class="col-md-offset-3 col-md-6"></login>'
    })
    .state('logout', {
      url: '/logout',
      controller: LogoutController
    })
    .state('signup', {
      url: '/signup',
      template: '<create-account class="col-md-offset-3 col-md-6"></create-account>'
    });
};
module.exports.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];