angular.module('air').controller('CurrentWeatherCtrl', function ($scope, $http, weather) {
  'use strict';

  $scope.weather = weather;

  // Weather station.
  $scope.activeStation = {};
  $scope.stations = {};

  // Weather logs.
  $scope.logs = {};

  /*
   * Scope methods.
   */

  $scope.FetchWeatherData = function() {
    $scope.weather.FetchWeatherData(function (data) {
      $scope.logs = data;
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