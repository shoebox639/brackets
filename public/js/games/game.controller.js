class GameController {
  get team1() {
    return this.game.teams[0];
  }

  get team2() {
    return this.game.teams[1];
  }

  isWin(team) {
    const other = team === this.team1 ? this.team2 : this.team1;
    return team.score > other.score;
  }

  isTie() {
    return this.isDirty() && (this.team1.score === this.team2.score);
  }

  isDirty() {
    return this.team1.dirty || this.team2.dirty;
  }
}

GameController.$inject = [];

module.exports = GameController;
