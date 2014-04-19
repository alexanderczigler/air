angular.module('air').controller('CurrentWeatherCtrl', function ($scope, $http, weather) {
  'use strict';

  $scope.weather = weather;

  // Weather station.
  $scope.activeStation = {};
  $scope.stations = {};
  //$scope.stationsUrl = CONFIG.apiUrl + 'stations';

  // Weather logs.
  $scope.logs = {};
  //$scope.logsUrl = CONFIG.apiUrl + 'logs/{stationId}/latest';

  /*
    Scope methods.
   */
  $scope.loadStations = function() {
    $http({method: 'GET', url: $scope.stationsUrl}).
      success(function(data, status, headers, config) {
        $scope.stations = data;
        console.log($scope.stations);
      }).
      error(function(data, status, headers, config) {
        console.log('Unable to load stations!', data);
      });
  };

  $scope.loadLogs = function(stationId) {
    $http({method: 'GET', url: $scope.logsUrl.replace('{stationId}', stationId)}).
      success(function(data, status, headers, config) {
        $scope.logs = data;
      }).
      error(function(data, status, headers, config) {
        console.log('Unable to load logs!', data);
      });
  };

  $scope.setActiveStation = function(stationId) {
    console.log('set station', stationId);
    $scope.stations.map(function(s) {
      if (s.StationId === stationId) {
        $scope.weather.CurrentStation = s;
      }
    });
  };

  /*
    Watches.
   */

  $scope.$watch('weather', function() {
    //$scope.stations = $scope.weather.FetchWeatherStations();
  });

  $scope.$watch('weather.CurrentStation', function() {
    if (!!$scope.weather.CurrentStation) {
      console.log('CurrentStation changed');
      $scope.weather.FetchWeatherData(function (data) {
        $scope.logs = data;
      });
    }
  });

  $scope.$parent.$watch('currentStation', function(currentStation) {
    console.log('curr', currentStation);
  });

});