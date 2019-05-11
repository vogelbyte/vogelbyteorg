package com.vogelbyte.main.Dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.vogelbyte.main.entity.MedicineDetailEntity;

public interface MedicineDetailDao extends MongoRepository<MedicineDetailEntity, String>{

}
