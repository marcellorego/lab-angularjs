'use strict';

App.config(

		  // dependencies injection
		  ['$routeProvider',  function(routeProvider) {

			    routeProvider
			      .when(
			        '/login', {controller: 'LoginController', templateUrl:'app/login.html'}
			      )
			      .when(
			        '/home', {controller: 'HomeController', templateUrl:'app/home.html'}
			      )
			      .otherwise({redirectTo: '/login'});
			}
		   
		]);