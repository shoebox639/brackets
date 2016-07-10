class TeamService {
  constructor($http) {
    this.$http = $http;
  }

  getAllTeams() {
    return this.$http.get('/teams').then(result => result.data);
  }
}

TeamService.$inject = ['$http'];
module.exports = TeamService;
