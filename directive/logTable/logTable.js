angular.module('air').directive('logTable', function (weather) {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {
      readings: '='
    },
    templateUrl: 'directive/logTable/logTable.html',
    link: function (scope, element, attrs, fn) {

      scope.weather = weather;
      scope.readingsWithData = {};

      scope.$watch('readings', function(readings) {
        console.log('readings', readings);
        if (!readings) {
          return;
        }

        readings.map(function(r) {

          if (!r.TempOut) {
            return;
          }
          r.TempOut = r.TempOut.toFixed(1);

          weather.GetReading(r.Key, function(data) {
            console.log('data', data);
            scope.readingsWithData[r.Key] = data;
          });
        });

        

      });

    }
  };
});
