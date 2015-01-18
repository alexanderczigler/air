angular.module('air').controller('FilterCtrl', function ($scope, $rootScope, weather) {
  'use strict';

  /* global moment */

  $scope.weather = weather;
  $scope.readings = [];

  $scope.stations = [];
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
  $scope.stations.push({Name: 'backliden'}); // NOTE: Hard coded for now.
  //weather.FetchWeatherStations(function (data) {
    //$scope.stations.push({Name: 'backliden'});
  //});

  weather.GetReadings('', '', function (data) {
    $scope.readings = data;
    //console.log(data);
  });

  $scope.$watch('currentStation', function(station) {
    weather.CurrentStation = station;
  });

  $scope.$watch('currentFilterType', function(type) {
    weather.CurrentFilterType = type;
  });

});