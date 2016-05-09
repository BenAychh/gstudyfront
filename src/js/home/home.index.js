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
      controller: function ($scope) {
        $scope.newDeck = {
          deckName: '',
          description: '',
          card: [{}],
        };
        $scope.addQuestion = function () {
          $scope.newDeck.card.push({});
        };

        $scope.addDeck = function () {
          console.log($scope.newDeck);
        };
      },
    });
  });
})();
