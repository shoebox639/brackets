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
      templateUrl: '/assets/app.template.html'
    })
    .state('login', {
      url: '/login',
      template: '<div class="row"><login class="col-md-offset-3 col-md-6"></login></div>'
    })
    .state('logout', {
      url: '/logout',
      controller: LogoutController
    })
    .state('signup', {
      url: '/signup',
      template: '<div class="row"><create-account class="col-md-offset-3 col-md-6"></create-account></div>'
    });
};
module.exports.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];