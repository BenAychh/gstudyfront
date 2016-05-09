/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function () {
	  'use strict';

	  __webpack_require__(1)();

	  angular.module('app', ['ui.router', 'app.home', 'app.login'])
	  .config(function ($stateProvider, $urlRouterProvider) {
	    $stateProvider
	      .state('register', {
	        url: '/register',
	        templateUrl: 'js/register/register.register.html',
	      });
	  });
	})();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = () => {
	  __webpack_require__(2);
	  __webpack_require__(3);
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ },
/* 3 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);