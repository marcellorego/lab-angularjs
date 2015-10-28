package br.com.labs.login.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Usuario {

	private String chave;
	
	private String senha;
	
	private Boolean loginValido;

	public String getChave() {
		return chave;
	}

	public void setChave(String chave) {
		this.chave = chave;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Boolean getLoginValido() {
		return loginValido;
	}

	public void setLoginValido(Boolean loginValido) {
		this.loginValido = loginValido;
	}
	
}