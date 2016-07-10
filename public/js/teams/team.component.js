module.exports = {
  selector: 'team',
  bindings: {
    'team':  '<',
    'align': '@'
  },
  templateUrl: '/assets/teams/team.template.html',
  controller: require('./team.controller')
};