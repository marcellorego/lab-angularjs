'use strict';

App.controller('HomeController', ['$scope', '$location',

    function (scope, location) {
	
		scope.logoutClick = function() {
			location.path("/login");
		};
	
	}]
);