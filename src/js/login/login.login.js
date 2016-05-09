(function () {

  'use strict';

  angular.module('app.login', ['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'js/home/home.index.html',
      controller: function($rootScope, $scope, authService) {
        $scope.user = {};
        $scope.login = function() {
          authService.login($scope.user)
          .then(function(user) {
            authService.setUserInfo(user);
            $rootScope.currentUser = authService.getUserInfo();
          })
          .catch(function(err) {
            console.log(err);
          });
        }
      }
    });
  });
  
})();
