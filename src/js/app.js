require('./routes.js')();

(function () {
  'use strict';
  angular.module('app', ['ui.router', 'app.home'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'js/login/login.login.html',
      })
      .state('register', {
        url: '/register',
        templateUrl: 'js/register/register.register.html',
      });
  });
})();
