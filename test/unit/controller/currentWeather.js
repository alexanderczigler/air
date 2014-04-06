describe('CurrentWeatherCtrl', function () {

  var scope, ctrl, config;
  config = {
    'apiUrl': 'http://some.api.url:3000'
  };

  beforeEach(function () {
    module('air');
    inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('CurrentWeatherCtrl', {$scope: scope, CONFIG: config});
    });
  });

  it('should have a stationsUrl', function () {
    expect(scope.logsUrl).to.eql('http://some.api.url:3000logs/{stationId}/latest');
  });

});