angular.module('air').directive('logTable', function () {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {
      logs: '='
    },
    templateUrl: 'directive/logTable/logTable.html',
    link: function (scope, element, attrs, fn) {


    }
  };
});
