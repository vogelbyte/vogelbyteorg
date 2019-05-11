package com.vogelbyte.main.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vogelbyte.main.Dao.LoginDao;
import com.vogelbyte.main.entity.LoginEntity;

@Service
public class LoginService {
	
	@Autowired
	private LoginDao loginDao ;
	
	private final Logger LOG = LoggerFactory.getLogger(getClass());
	
	public LoginService(LoginDao loginDao) {
		this.loginDao = loginDao;
	}
	
	
	public LoginEntity getAdminByemailAndPassword(LoginEntity email) {
		LOG.info("Getting all users.");
		return loginDao.getLoginEntityByEmailAndPassword(email.getEmail(),email.getPassword());
	}
	public LoginEntity createAdmin(LoginEntity admin) {
		LOG.info("Saving user.");
		return loginDao.save(admin);
	}

}
