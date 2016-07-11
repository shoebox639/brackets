class Controller {
  constructor($http, authService, $state) {
    this.$http = $http;
    this.authService = authService;
    this.$state = $state;
  }

  submit(username, password) {
    this.authService.login(username, password)
      .then(() => this.$state.go('brackets'));
  }
}

Controller.$inject = ['$http', 'authService', '$state'];
module.exports = Controller;