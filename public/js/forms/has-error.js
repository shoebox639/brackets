module.exports = function() {
  return {
    restrict: 'A',
    require: ['ngModel', '^form'],
    link($scope, $elem, $attrs, $ctrls) {
      const ngModel = $ctrls[0];
      const form = $ctrls[1];
      ngModel.hasError = function() {
        return ngModel.$invalid && (ngModel.$dirty || form.$submitted);
      };
    }
  };
};

module.exports.$inject = [];
