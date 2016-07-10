module.exports = {
  selector: 'game',
  bindings: {
    'game':  '<',
    'onSelect': '&'
  },
  templateUrl: '/assets/games/game.template.html',
  controller: require('./game.controller')
};