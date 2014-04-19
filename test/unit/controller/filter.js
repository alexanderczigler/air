describe('FilterCtrl', function () {

  var scope, ctrl;

  beforeEach(function () {
    module('air');
    inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('FilterCtrl', {$scope: scope});
    });
  });

  xit('should have tests', function () {
    
  });

});