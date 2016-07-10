const _ = require('_');


class BracketController {
  constructor(bracketService, teamService) {
    this.bracketService = bracketService;
    this.teamService = teamService;

  }

  $postLink() {
    this.bracketService.getAllGames().then(games => this.games = games);

    this.teamService.getAllTeams().then(teams => this.teams = teams);
  }

  get teamsByName() {
    return _.chain(this.teams)
      .keyBy('name')
      .forEach((v, k) => v.points = 0)
      .value();
  }

  get teamsByGroup() {
    return _.groupBy(this.teams, 'group');
  }

  updateStandings() {
    const results = this.games.map((game) => {
      return game.teams
        .filter(team => team.selected)
        .map(team => team.name);
    }).filter(result => result.length)
      .map(result => {
        const points = result.length > 1 ? 1 : 3;
        return result.map(team => ({ name: team, points }));
      });

    const teamsByName = this.teamsByName;

    results.forEach((game) => {
      game.forEach(team => {
        teamsByName[team.name].points += team.points;
      });
    });
  }
}

BracketController.$inject = ['bracketService', 'teamService'];

module.exports = BracketController;
