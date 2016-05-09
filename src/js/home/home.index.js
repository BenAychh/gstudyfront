angular.module('app.home', ['ui.router'])
.config(function ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.index.html',
    })
    .state('home.test', {
      url: '/test',
      templateUrl: 'home.test.html',
    });
});
