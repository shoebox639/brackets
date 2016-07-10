class AuthService {
  constructor($cookies, $http) {
    this.$cookies = $cookies;
    this.$http = $http;
  }

  login(username, password) {
    return this.$http.post('/users/login', { username, password }).then((result) => {
      const user = result.data;
      if (user) {
        this.$cookies.putObject('currentUser', user);
      }

      return user;
    });
  }

  logout() {
    this.$cookies.remove('currentUser');
  }

  isLoggedIn() {
    return !!this.currentUser();
  }

  currentUser() {
    return this.$cookies.get('currentUser');
  }
}

AuthService.$inject = ['$cookies', '$http'];
module.exports = AuthService;
