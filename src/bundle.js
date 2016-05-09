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

	(function() {
	  'use strict';
	  __webpack_require__(1)();

	  angular.module('app', ['ui.router'])
	  .config(function ($stateProvider, $urlRouterProvider) {
	    $stateProvider
	      .state('login', {
	        url: '/',
	        templateUrl: 'js/login/login.login.html',
	      })
	      .state('register', {
	        url: '/register',
	        templateUrl: 'js/register/register.register.html',
	      })
	      .state('home', {
	        url: '/home',
	        templateUrl: 'js/home/home.index.html',
	      })
	    $urlRouterProvider.otherwise('/');
	  });
	})();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = () => {
	  __webpack_require__(2);
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	angular.module('app.home', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
	  $stateProvider
	    .state('home', {
	      url: '/',
	      templateUrl: 'home.index.html',
	    })
	    .state('home.test', {
	      url: '/test',
	      templateUrl: 'home.index.html',
	    });
	  $urlRouterProvider.otherwise('/');
	});


/***/ }
/******/ ]);