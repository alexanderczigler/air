angular.module('air').service('weather', function ($http, CONFIG) {
  'use strict';

  var apiUrls = {
    logs: CONFIG.apiUrl + 'logs/{stationId}/latest',
    stations: CONFIG.apiUrl + 'stations'
  };

  var weather = {
    CurrentStation: {},
    CurrentMonth: '',
    FetchWeatherData: function(callback) {
      $http({method: 'GET', url: apiUrls.logs.replace('{stationId}', this.CurrentStation.StationId)}).
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