(function () {

  'use strict';

  angular.module('app.login', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'js/login/login.login.html',
      controller: function($rootScope, $scope, $location, $http, $window) {
        $scope.user = {};
        $scope.login = function() {
          return $http({
            method: 'POST',
            url: 'http://localhost:3000/users/login',
            data: {
              username: $scope.user.username,
              password: $scope.user.password
            }
          })
          .then(function(userData) {
            $window.localStorage.setItem('user', JSON.stringify(userData.data.user));
            $window.localStorage.setItem('token', JSON.stringify(userData.data.token));
            $state.go('/home');
            $rootScope.currentUser = $window.localStorage.getItem('user');
          })
          .catch(function(err) {
            console.log(err);
          });
        }
      }
    });
  });

})();
