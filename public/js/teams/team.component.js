module.exports = {
  selector: 'team',
  require: {
    bracketsCtrl: '^bracket'
  },
  bindings: {
    'team':  '<',
    'align': '@',
    'editable': '<',
    'stat': '@',
    'size': '@'
  },
  templateUrl: '/assets/teams/team.template.html',
  controller: require('./team.controller')
};