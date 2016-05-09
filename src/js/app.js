(function () {
  'use strict';
  require('./routes.js')();

  angular.module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'js/login/login.login.html',
      })
      .state('register', {
        url: '/register',
        templateUrl: 'js/register/register.register.html',
      })
      .state('home', {
        url: '/home',
        templateUrl: 'js/home/home.index.html',
      });
  });
})();
