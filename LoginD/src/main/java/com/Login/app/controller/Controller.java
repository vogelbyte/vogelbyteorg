package com.Login.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Login.app.entity.Admin;
import com.Login.app.service.AdminService;

@CrossOrigin
@RestController
@RequestMapping(value="api/admins")

public class Controller {
	 
	@Autowired
	private AdminService adminsevice;
	
	@PostMapping(value="/create")
	public Admin createAdmin( @RequestBody Admin admin) {
		
		return adminsevice.createAdmin(admin);
		
		
	}
	
	@GetMapping(value="/admin/{id}")
	public Admin getAdminById (@PathVariable("id") Integer id) {
		return adminsevice.getAdminById(id);
	}
	@PostMapping(value="/login")
		public ResponseEntity<Admin> getAdminByemailAndPassword(@RequestBody Admin email) {
		System.out.println(email.getEmail());
		Admin data=adminsevice.getAdminByemailAndPassword(email);
		if(data==null) {
			System.out.println("your data is "+data);
			return ResponseEntity.notFound().build();
		}else {
			System.out.println("your data is "+data.toString());

			return ResponseEntity.ok().body(data);
		}
	}
}
