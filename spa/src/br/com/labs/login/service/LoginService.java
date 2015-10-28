package br.com.labs.login.service;

import javax.ws.rs.Consumes;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.com.labs.login.business.LoginBusiness;
import br.com.labs.login.model.Usuario;

@Path("loginService")
public class LoginService {

	private LoginBusiness loginBusiness = new LoginBusiness();
	
	public LoginBusiness getLoginBusiness() {
		return loginBusiness;
	}

	public void setLoginBusiness(LoginBusiness loginBusiness) {
		this.loginBusiness = loginBusiness;
	}

	@PUT
	@Consumes({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public Usuario verificarLogin(Usuario usuario) {
		Usuario result = this.getLoginBusiness().verificarLogin(usuario);
		return result;
	}	
	
}