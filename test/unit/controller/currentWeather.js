describe('CurrentWeatherCtrl', function () {

  var scope, ctrl;

  beforeEach(function () {
    module('air');
    inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('CurrentWeatherCtrl', {$scope: scope});
    });
  });

  xit('should have a stationsUrl', function () {
    //expect(scope.logsUrl).to.eql('http://some.api.url:3000logs/{stationId}/latest');
  });

});