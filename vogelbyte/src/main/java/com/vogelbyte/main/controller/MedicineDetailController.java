package com.vogelbyte.main.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vogelbyte.main.entity.MedicineDetailEntity;
import com.vogelbyte.main.service.MedicineDetailService;

@CrossOrigin
@RestController 
@RequestMapping(value="vogelbyte")
public class MedicineDetailController {
	@Autowired
	private MedicineDetailService medicineDetailService;
	
	@RequestMapping(value = "/createmedicine", method = RequestMethod.POST)
	public MedicineDetailEntity createMedicine( @RequestBody MedicineDetailEntity entity) {
		return medicineDetailService.createMedicine(entity);
	}
	
	@GetMapping(value="/medicinedetail")
public Iterable<MedicineDetailEntity> getDetail(@RequestBody MedicineDetailEntity medicineDetailEntity ){
		Iterable<MedicineDetailEntity> iterable=medicineDetailService.getDetail();
		return iterable;
	}
}
