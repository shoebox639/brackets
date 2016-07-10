module.exports = function() {
  return {
    restrict: 'A',
    scope: {
      matches: '='
    },
    require: 'ngModel',
    link($scope, $elem, $attrs, ngModel) {
      ngModel.$validators.matches = (modelValue, viewValue) => {
        const val = modelValue || viewValue;
        if (!val) {
          return true;
        }
        return val === $scope.matches;
      };
    }
  };
};

module.exports.$inject = [];
