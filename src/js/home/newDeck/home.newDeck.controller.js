angular.module('app', [])
.controller('newDeckController', ['$scope', function ($scope) {
  console.log('here?');
  $scope.newDeck = {
    deckName: 'A new deck',
    description: 'This is a description of a new deck',
  };
}]);
