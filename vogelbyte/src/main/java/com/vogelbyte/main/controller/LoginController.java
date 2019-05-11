package com.vogelbyte.main.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vogelbyte.main.entity.LoginEntity;
import com.vogelbyte.main.service.LoginService;


@CrossOrigin
@RestController
@RequestMapping(value="vogelbyte")
public class LoginController {
	private final Logger LOG = LoggerFactory.getLogger(getClass());

	@Autowired
	private LoginService loginService;
	@Autowired
	
	@PostMapping(value="/login")
	public ResponseEntity<LoginEntity> getAdminByemailAndPassword(@RequestBody LoginEntity email){
		LoginEntity data=loginService.getAdminByemailAndPassword(email);
		if(data==null) {
			System.out.println("your data is "+data);
			return ResponseEntity.notFound().build();
		}else {
			System.out.println("your data is "+data.toString());

			return ResponseEntity.ok().body(data);
		}
				
	}
	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public LoginEntity createAdmin( @RequestBody LoginEntity admin) {
		LOG.info("Saving user.");
		return loginService.createAdmin(admin);
		
		
	}
	

}
