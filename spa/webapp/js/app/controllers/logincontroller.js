'use strict';

App.controller('LoginController', ['$scope', '$location', 'Auth',

	function (scope, location, Auth) {
	
		scope.loginResult = function(data, status) {
			if (data && data.loginValido == "true")
				location.path("/home");
			else
				location.path("/login");
			scope.usuario.chave = "";
			scope.usuario.senha = "";
		};
		
		scope.loginFault = function(data, status) {
			scope.usuario.chave = "";
			scope.usuario.senha = "";
			location.path("/login");
		};
		
		scope.loginClick = function() {
			
			var usuario = {chave: scope.usuario.chave, senha: scope.usuario.senha};
			
			Auth.login(usuario)
				.success(scope.loginResult)
				.error(scope.loginFault);
		};
		
		scope.cancelarClick = function() {
			scope.usuario.chave = "";
			scope.usuario.senha = "";
			location.path("/login");
		};
		
	}]
);