describe('logTable', function () {

  var $compile, $templateCache, outerScope, scope, element, latest, compile, html, innerScope, _httpBackend_, reading;

  reading =
  {
    "Id": "d50c6c7e-439b-4098-95f8-8cc9d138c3ca",
    "StationId": "4129017d-0156-4a91-87b8-e464f93a5c1b",
    "Date": "2014-04-06",
    "Time": " 10:55 UTC ",
    "TempOut": 9.7,
    "FeelsLike": 8.8,
    "HumidityOut": 78,
    "WindDirection": " N ",
    "WindAvg": 0,
    "WindGust": 0,
    "Rain": 60.9,
    "AbsPressure": "998.9"
  };

  beforeEach(function () {
    module('air');
    inject(function ($rootScope, _$compile_, _$templateCache_, _$httpBackend_) {
      $compile = _$compile_;
      $templateCache = _$templateCache_;
      _httpBackend_ = _$httpBackend_;

      $templateCache.put('directive/logTable/logTable.html', '<div><table cellspacing="0"><thead><tr><td>Time</td><td>Temp</td><td>Humidity</td> <td>Wind</td><td>Rain</td><td>Abs. pressure</td></tr></thead><tbody><tr ng-repeat="log in logs"><td>{{log.Date}} {{log.Time}}</td><td>{{log.TempOut}}&deg; C</td><td>{{log.HumidityOut}} %</td><td>{{log.WindAvg}} m/s from {{log.WindDirection}}</td><td>{{log.Rain}} mm</td><td>{{log.AbsPressure}} mb</td></tr></tbody></table></div>');
      scope = $rootScope.$new();

      scope.readings = [];
      scope.readings.push(reading);

      html = '<log-table readings="readings"></log-table>';

      element = $compile(html)(scope);

      _httpBackend_.whenGET('directive/logTable/logTable.html').respond(200);
      _httpBackend_.expectGET('directive/logTable/logTable.html');

      scope.$digest();
      innerScope = element.isolateScope();

    });
  });

  xit('should bind readings', function() {
    expect(innerScope.readings[0]).to.eql(reading);
  });
  
});