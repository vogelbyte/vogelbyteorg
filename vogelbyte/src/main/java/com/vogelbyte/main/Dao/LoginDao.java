package com.vogelbyte.main.Dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.vogelbyte.main.entity.LoginEntity;

public interface LoginDao extends MongoRepository<LoginEntity, String> {
	
	LoginEntity getLoginEntityByEmailAndPassword(String email,String password) ;
}
