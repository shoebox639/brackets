const angular = require('angular');

class AlertService {
  constructor() {
    this.alerts = [];
  }

  push(alert) {
    const def = {
      severity: 'default',
      dismiss: true
    };
    this.alerts.push(angular.extend(def, alert));
  }
}

AlertService.$inject = [];

module.exports = AlertService;