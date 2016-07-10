class GameController {
  get team1() {
    return this.game.teams[0];
  }

  get team2() {
    return this.game.teams[1];
  }

  win(team) {
    this.team1.selected = false;
    this.team2.selected = false;

    team.selected = true;

    this.onSelect();
  }

  tie() {
    this.team1.selected = true;
    this.team2.selected = true;

    this.onSelect();
  }
}

GameController.$inject = [];

module.exports = GameController;
