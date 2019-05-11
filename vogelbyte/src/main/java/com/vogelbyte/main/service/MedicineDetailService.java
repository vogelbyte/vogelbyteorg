package com.vogelbyte.main.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vogelbyte.main.Dao.MedicineDetailDao;
import com.vogelbyte.main.entity.MedicineDetailEntity;

@Service
public class MedicineDetailService {

	
	@Autowired
	private MedicineDetailDao medicineDetailDao;
	public Iterable<MedicineDetailEntity> getDetail() {
		// TODO Auto-generated method stub
		return medicineDetailDao.findAll();
	}
	public MedicineDetailEntity createMedicine(MedicineDetailEntity entity) {
		// TODO Auto-generated method stub
		return medicineDetailDao.save(entity);
	}
	
}
