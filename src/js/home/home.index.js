angular.module('app.home', ['ui.router'])
.config(function ($stateProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    abstract: true,
    templateUrl: 'js/home/home.index.html',
  })
  .state('home.default', {
    url: '',
    templateUrl: 'js/home/default/home.default.html',
  });
});
