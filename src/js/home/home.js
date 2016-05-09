angular.module('app.home', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home.login', {
      url: '/',
      templateUrl: 'js/home/login/home.login.login.html',
    })
    .state('home.register', {
      url: '/register',
      templateUrl: '/js/home/register/home.register.register.html',
    });
  $urlRouterProvider.otherwise('/');
});
