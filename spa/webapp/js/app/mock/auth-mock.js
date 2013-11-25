'use strict';

App.factory('Auth', function($http) {
	
//    var authData = [
//    		{chave: 'admin', senha: 'admin', loginValido: 'false'},
//    		{chave: 'user1', senha: 'user1', loginValido: 'false'},
//    		{chave: 'user2', senha: 'user2', loginValido: 'false'}
//    	];	
    
	return {
		
	    /*load: function() {
			return $http.get('/api/v1/auth');
		},
	    logout: function() {
			return $http.get('/api/v1/auth/logout');
		},*/
		login: function(inputs) {
			
			var authData = {};
			
		    $http.get('usuarios.json')
		    	.then(function(res){
		    		authData.usuarios = res.data;                
		    	});
			
			var result = null;
			
			angular.forEach(authData, function(usuario) {
				usuario.loginValido = false;
		        if (usuario.chave == inputs.chave) {
		        	result = usuario;
		        	result.loginValido = true;
		        }
		    });
		    
			var data = { sucess: function(result) {} };
			
			return data;
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