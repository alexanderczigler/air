describe('weather', function () {

  var weather;

  beforeEach(function () {
    module('air');
    inject(function (_weather_) {
      weather = _weather_;
    });
  });

  xit('should have tests', function () {
    //expect(weather.doSomething()).to.equal('something');
  });

});