package com.Login.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedNativeQueries;
import javax.persistence.NamedNativeQuery;
import javax.persistence.Table;


@Entity
@Table (name="admin")
@NamedNativeQueries(value = { @NamedNativeQuery(name = "Admin.getAdminByUsernameAndPassword", query = "SELECT * FROM admin WHERE email=?1 And password=?2") })
public class Admin {

	@Id
	@GeneratedValue( strategy = GenerationType.AUTO)
	@Column(name="person_id")
	private int id;
	
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;

	@Override
	public String toString() {
		return "Admin [id=" + id + ", email=" + email + ", password=" + password + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
