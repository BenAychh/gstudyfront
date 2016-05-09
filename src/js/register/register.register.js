(function () {

  'use strict';

  angular.module('app.login', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
    .state('register', {
      url: '/register',
      templateUrl: 'js/login/register.register.html',
      controller: function($rootScope, $scope, $http, $window) {
        $scope.user = {};
        $scope.register = function() {
          return $http({
            method: 'POST',
            url: 'http://localhost:3000/users/add',
            data: {
              username: $scope.user.username,
              password: $scope.user.password,
              confPass: $scope.user.confirmPassword
            }
          })
          .then(function(userData) {
            $window.localStorage.setItem('user', JSON.stringify(userData.data.user));
            $window.localStorage.setItem('token', JSON.stringify(userData.data.token));
            $state.go('/home');
            $window.localStorage.getItem('user');
          })
          .catch(function(err) {
            console.log(err);
          });
        }
      }
    });
  });

})();
