module.exports = {
  selector: 'team',
  require: {
    bracketsCtrl: '^bracket'
  },
  bindings: {
    'team':  '<',
    'align': '@',
    'editable': '<'
  },
  templateUrl: '/assets/teams/team.template.html',
  controller: require('./team.controller')
};