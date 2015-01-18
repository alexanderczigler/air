angular.module('air').service('weather', function ($http, CONFIG) {
  'use strict';

  var apiUrls = {
    reading: CONFIG.apiUrl + 'reading/{key}',
    readings: CONFIG.apiUrl + 'readings'
  };

  var weather = {
    CurrentStation: {},
    CurrentMonth: '',
    CurrentFilterType: {
      Name: 'Latest',
      Value: 'latest'
    },
    GetReadings: function(station, date, callback) {
      var url = apiUrls.readings;

      if (!!station) {
        url += '?station=' + station;
      }

      if (!!date) {
        url += '&date=' + date;
      }

      $http({method: 'GET', url: url}).
        success(function(data, status, headers, config) {
          return callback(data);
        }).
        error(function(data, status, headers, config) {
          console.log('Unable to get readings from API', data);
        });
    },
    GetReading: function(key, callback) {
      var url = apiUrls.reading;
      url.replace('{key}', key);
      $http({method: 'GET', url: url}).
        success(function(data, status, headers, config) {
          console.log('get reading', data);
          return callback(data);
        }).
        error(function(data, status, headers, config) {
          console.log('Unable to get readings from API', data);
        });
    }
  };

  return weather;
});