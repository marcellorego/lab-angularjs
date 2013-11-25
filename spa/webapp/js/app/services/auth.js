'use strict';

App.factory('Auth', function($http) {
	
	return {
	    /*load: function() {
			return $http.get('/api/v1/auth');
		},
	    logout: function() {
			return $http.get('/api/v1/auth/logout');
		},*/
		login: function(inputs) {
			var result = $http.put('restful/loginService', inputs);
			return result;
		}/*,
		register: function(inputs) {
			return $http.post('/api/v1/auth/register', inputs);
		},
		locations: function() {
			return $http.get('/api/v1/auth/locations');
		},
		check: function() {
			return $http.get('/api/v1/auth/check');
		}*/
	};
});