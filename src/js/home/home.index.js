(function () {
  'use strict';

  angular.module('app.home', [
    'ui.router',
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'js/home/home.index.html',
    })
    .state('home.default', {
      url: '',
      templateUrl: 'js/home/default/home.default.html',
    })
    .state('home.newDeck', {
      url: '/newDeck',
      templateUrl: 'js/home/newDeck/home.newDeck.index.html',
      controller: function ($scope, $http) {
        $scope.newDeck = {
          name: '',
          descrip: '',
          card: [{}],
        };
        $scope.addQuestion = function () {
          $scope.newDeck.card.push({});
        };

        $scope.addDeck = function () {
          $http({
            method: 'POST',
            url: 'http://10.2.12.248:3000/decks/add/1',
            data: $scope.newDeck,
          })
          .then(response => {
            console.log(response);
          })
        };
      },
    });
  });
})();
