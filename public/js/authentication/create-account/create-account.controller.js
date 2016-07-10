const errCodesMsgs = {
  11000: 'This username is already taken. Try another one.'
};

class Controller {
  constructor($http, authService, alertService, $q) {
    this.$http = $http;
    this.authService = authService;
    this.alertService = alertService;
  }

  submit(username, password) {
    this.$http.post('/users', { username, password }).then(
      result => this.authService.login(username, password),
      (result) => {
        const err = result.data.error;

        const message = errCodesMsgs[err.code] || err.message;
        this.alertService.push({
          message,
          title: 'Unable to Create Account',
          severity: 'danger'
        });

        return $q.reject(err);
      }
    ).then(() => this.$state.go('root'));
  }
}

Controller.$inject = ['$http', 'authService', 'alertService', '$q'];
module.exports = Controller;