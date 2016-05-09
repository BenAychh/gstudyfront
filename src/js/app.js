require('./home/home.js'),

angular.module('app', ['app.home', 'ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/',
      templateUrl: 'js/home/login/home.login.login.html',
    });
  $urlRouterProvider.otherwise('/');
});
