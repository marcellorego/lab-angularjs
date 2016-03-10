'use strict';

angular.module('vizApp', ['ngRoute', 'vizApp.controllers'])

.constant("serviceConfig", {
    "urlbase": "/mock"
})

.config(function($routeProvider) {
 
  $routeProvider
    .when('home', {
        url: '/home',
        templateUrl: 'home/layout.html',
        controller: 'HomeCtrl'
    })
  ;
 
  $routeProvider.otherwise({
        redirectTo: '/home'
      });
 
});