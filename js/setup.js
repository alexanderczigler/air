angular.module('air', ['ui.router', 'ngResource']).constant('CONFIG', {
  apiUrl: 'http://localhost:3000/'
});

angular.module('air').config(function ($stateProvider, $urlRouterProvider) {
  'use strict';

  /* Add New Routes Above */
  
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");

});

angular.module('air').run(function ($rootScope) {
  'use strict';

  $rootScope.safeApply = function (fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});