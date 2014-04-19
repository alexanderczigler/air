angular.module('air').controller('FilterCtrl', function ($scope, $rootScope, weather) {
  'use strict';

  $scope.weather = weather;
  $scope.stations = {};
  $scope.currentStation = {};
  $scope.filterTypes = [
    {
      Name: 'Latest',
      Value: 'latest'
    },
    {
      Name: 'Last 7 days (ca)',
      Value: ''
    },
    {
      Name: 'Coldest',
      Value: 'coldest'
    },
    {
      Name: 'Hottest',
      Value: 'hottest'
    },
    {
      Name: 'Average',
      Value: 'average'
    }
  ];
  $scope.currentFilterType = {
    Name: 'Latest',
    Value: 'latest'
  };

  // Get weather stations from API.
  weather.FetchWeatherStations(function (data) {
    $scope.stations = data;
  });

  $scope.$watch('currentStation', function(station) {
    weather.CurrentStation = station;
  });

  $scope.$watch('currentFilterType', function(type) {
    weather.CurrentFilterType = type;
  });

});