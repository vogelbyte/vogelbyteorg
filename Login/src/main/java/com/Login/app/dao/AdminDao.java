package com.Login.app.dao;

import org.springframework.data.repository.CrudRepository;
import com.Login.app.entity.Admin;

public interface AdminDao extends CrudRepository<Admin, Integer> {

	Admin getAdminByemailAndPassword(String email,String password);

}
