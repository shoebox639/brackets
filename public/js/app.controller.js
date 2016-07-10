class AppController {
  constructor(alertService, $state, isLoggedIn) {
    this.alertService = alertService;
    this.isLogin = true;

    if (!isLoggedIn) {
      $state.go('login');
    }
  }
}

AppController.$inject = ['alertService', '$state', 'isLoggedIn'];

module.exports = AppController;
