class BracketService {
  constructor($http) {
    this.$http = $http;
  }

  getAllGames() {
    const params  = { include: 'team' };
    return this.$http.get('/games', { params })
      .then(results => results.data);
  }
}

BracketService.$inject = ['$http'];
module.exports = BracketService;
