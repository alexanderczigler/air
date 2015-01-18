angular.module('air').controller('CurrentWeatherCtrl', function ($scope, $http, weather) {
  'use strict';

  $scope.weather = weather;

  // Weather station.
  $scope.activeStation = {};
  $scope.stations = {};

  // Weather readings.
  $scope.readings = {};

  /*
   * Scope methods.
   */

  $scope.FetchWeatherData = function() {
    $scope.weather.GetReadings('backliden', '20150101', function (data) {
      $scope.readings = data;
    });
  };

  /*
   * Watches.
   */

  $scope.$watch('weather.CurrentStation', function() {
    if (!!$scope.weather.CurrentStation) {
      $scope.FetchWeatherData();
    }
  });

  $scope.$watch('weather.CurrentFilterType', function() {
    if (!!$scope.weather.CurrentFilterType) {
      $scope.FetchWeatherData();
    }
  });

});