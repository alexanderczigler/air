describe('FooterCtrl', function () {

  var scope, ctrl;

  beforeEach(function () {
    module('air');
    inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('FooterCtrl', {$scope: scope});
    });
  });

  xit('should have tests', function () {
    
  });

});