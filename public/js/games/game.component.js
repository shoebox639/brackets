module.exports = {
  selector: 'game',
  bindings: {
    'game':  '<'
  },
  templateUrl: '/assets/games/game.template.html',
  controller: require('./game.controller')
};