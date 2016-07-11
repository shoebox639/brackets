class TeamController {
  constructor() {
  }

  onUpdate() {
    this.team.dirty = true;

    this.bracketsCtrl.updateStandings();
  }


}

TeamController.$inject = [];

module.exports = TeamController;
