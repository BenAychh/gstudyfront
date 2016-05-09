(function () {
  'use strict';
  require('./routes.js')();

  angular.module('app', ['ui.router', 'app.home'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'js/register/register.register.html',
      });
  });
})();
