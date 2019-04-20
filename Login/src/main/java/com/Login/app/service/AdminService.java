package com.Login.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Login.app.dao.AdminDao;
import com.Login.app.entity.Admin;

@Service
public class AdminService {

	@Autowired
	private AdminDao admindao;
	public Admin createAdmin(Admin admin) {

		return admindao.save(admin);
	}
	public Admin getAdminById(Integer id) {
		// TODO Auto-generated method stub
		Admin obj= admindao.findById(id).get();
		 return obj;
	}
	public Admin getAdminByUsernameAndPassword(Admin email) {
		Admin obj = admindao.findByEmail(email.getEmail());	
		return obj;
	}
}
