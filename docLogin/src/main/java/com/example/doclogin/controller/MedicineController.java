package com.example.doclogin.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.doclogin.model.Medicine;
import com.example.doclogin.repository.MedicineRepository;





@RestController
@CrossOrigin(allowedHeaders = "*",origins = "*")
@RequestMapping("/api/v2/")
public class MedicineController {
	
	@Autowired
	private MedicineRepository medicineRepository;
	
	@GetMapping("/medicines")
	public List<Medicine> getAllMedicines(){
		return medicineRepository.findAll();
	}
	
	@PostMapping("/medicines")
	public Medicine createMedicine(@RequestBody Medicine medicine) {
		return medicineRepository.save(medicine);
	}
	
	@GetMapping("/medicines/{id}")
	public ResponseEntity<Medicine> getPatientById(@PathVariable Long id) throws AttributeNotFoundException {
		
		Medicine medicine = medicineRepository.findById(id)
				.orElseThrow(() -> new AttributeNotFoundException("ABCD" + id));
		
		return ResponseEntity.ok(medicine);
	}
	
	@PutMapping("/medicines/{id}")
	public ResponseEntity<Medicine> updateMedicine(@PathVariable Long id, @RequestBody Medicine medicineDetails) throws AttributeNotFoundException{
		
		Medicine medicine = medicineRepository.findById(id)
				.orElseThrow(() -> new AttributeNotFoundException("ABCD" + id));
		
		medicine.setDrugName(medicineDetails.getDrugName());
		medicine.setStock(medicineDetails.getStock());
		medicine.setId(medicineDetails.getId());
		
		Medicine updatedMedicine = medicineRepository.save(medicine);
		return ResponseEntity.ok(updatedMedicine);
	}
	
	@DeleteMapping("/medicines/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteMedicine(@PathVariable Long id) throws AttributeNotFoundException{
		
		Medicine medicine = medicineRepository.findById(id)
				.orElseThrow(() -> new AttributeNotFoundException("ABCD" + id));
		
		medicineRepository.delete(medicine);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
		

}