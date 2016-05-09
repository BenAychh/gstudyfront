(function () {
  'use strict';

  require('./routes.js')();

  angular.module('app', ['ui.router', 'app.home', 'app.login'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'js/register/register.register.html',
      });
  });
})();
