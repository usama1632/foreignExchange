'use strict';

/**
 * @ngdoc overview
 * @name myProjectApp
 * @description
 * # myProjectApp
 *
 * Main module of the application.
 */
angular
  .module('myProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
       
      .otherwise({
        redirectTo: '/'
      });
  });
