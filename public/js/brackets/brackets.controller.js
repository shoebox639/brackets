const _ = require('_');


class BracketController {
  constructor(bracketService, teamService) {
    this.bracketService = bracketService;
    this.teamService = teamService;

  }

  $postLink() {
    this.bracketService.getAllGames()
      .then(games => 
        games.map(game => {
          game.teams = game.teams.map(team => 
            _.assign(team, { score: 0 })
          );
          return game;
        })
      )
      .then(games => this.games = games);

    this.teamService.getAllTeams().then((teams) => {
      this.teams = teams;
      this.teamsByName = this.getTeamsByName(this.teams);
      this.teamsByGroup = this.getTeamsByGroup(this.teams);
    });
  }

  getTeamsByName(teams) {
    return _.chain(teams)
      .keyBy('name')
      .forEach(v => {
        v.points = 0;
        v.score = 0;
        v.gd = 0;
        v.beat = [];
      })
      .value();
  }

  getTeamsByGroup(teams) {
    return _.chain(teams)
      .sort((t1, t2) => {
        if (_.includes(t1.beat, t2.name)) {
          return 1;
        }
        else if (_.includes(t2.beat, t1.name)) {
          return -1;
        }
        return 0;
      })
      .sortBy([
        team => -team.points,
        team => -team.gd,
        team => -team.score,
      ])
      .groupBy('group')
      .value();
  }

  updateBracket() {
    bracketService.updateBracket(this.games);
  }

  updateStandings() {
    this.teamsByName = this.getTeamsByName(this.teams);

    this.games
      .filter(game => _.some(game.teams, team => team.dirty))
      .forEach((game) => {
        const t1Score = game.teams[0].score;
        const t2score = game.teams[1].score;
        const team1 = this.teamsByName[game.teams[0].name];
        const team2 = this.teamsByName[game.teams[1].name];

        team1.score += t1Score;
        team2.score += t2score;

        team1.gd += (t1Score - t2score);
        team2.gd += (t2score - t1Score);

        if (t1Score > t2score) {
          team1.points += 3;
          team1.beat.push(team2.name);
        }
        else if (t2score > t1Score) {
          team2.points += 3;
          team2.beat.push(team1.name);
        }
        else {
          team1.points += 1;
          team2.points += 1;
        }
      });

    this.teamsByGroup = this.getTeamsByGroup(this.teams);
  }
}

BracketController.$inject = ['bracketService', 'teamService'];

module.exports = BracketController;
