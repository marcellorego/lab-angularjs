package br.com.labs.login.business;

import br.com.labs.login.model.Usuario;

public class LoginBusiness {

	public Usuario verificarLogin(Usuario usuario) {
		
		if ((usuario.getChave().equals("admin")) && (usuario.getSenha().equals("admin")))
			usuario.setLoginValido(true);
		else
			usuario.setLoginValido(false);
		return usuario;
	}

}