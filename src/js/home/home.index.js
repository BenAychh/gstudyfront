angular.module('app.home', ['ui.router'])
.config(function ($stateProvider) {
  $stateProvider
    .state('home.test', {
      url: '/test',
      templateUrl: 'js/home/home.test.html',
    });
});
