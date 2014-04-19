angular.module('air').service('weather', function ($http, CONFIG) {
  'use strict';

  var apiUrls = {
    logs: CONFIG.apiUrl + 'logs/{stationId}/{filterType}',
    stations: CONFIG.apiUrl + 'stations'
  };

  var weather = {
    CurrentStation: {},
    CurrentMonth: '',
    CurrentFilterType: {
      Name: 'Latest',
      Value: 'latest'
    },
    FetchWeatherData: function(callback) {
      var url = apiUrls.logs;
      url = url.replace('{stationId}', this.CurrentStation.StationId);
      url = url.replace('{filterType}', this.CurrentFilterType.Value);
      $http({method: 'GET', url: url}).
        success(function(data, status, headers, config) {
          return callback(data);
        }).
        error(function(data, status, headers, config) {
          console.log('Unable to load logs!', data);
        });
    },
    FetchWeatherStations: function(callback) {
      $http({method: 'GET', url: apiUrls.stations}).
        success(function(data, status, headers, config) {
          return callback(data);
        }).
        error(function(data, status, headers, config) {
          console.log('Unable to load stations!', data);
        });
    }
  };

  return weather;
});