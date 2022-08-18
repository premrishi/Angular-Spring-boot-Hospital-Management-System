package com.example.hospital.controller;
  

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.hospital.model.patient;
import com.example.hospital.repository.PatientRepository;

@RestController
@CrossOrigin(allowedHeaders = "*",origins = "*")
@RequestMapping("/api/v1/")
public class PatientController {
	
	@Autowired
	private PatientRepository patientRepository;
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/patients")
	
	
	public List<patient> getAllPatients(){
		
		
		
		return patientRepository.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/patients")
	public patient createPatient(@RequestBody patient patient) {
		return patientRepository.save(patient);
	}
	
	@GetMapping("/patients/{id}")
	public ResponseEntity<patient> getPatientById(@PathVariable Long id) throws AttributeNotFoundException {
		
		patient patient = patientRepository.findById(id)
				.orElseThrow(() -> new AttributeNotFoundException("ABCD" + id));
		
		return ResponseEntity.ok(patient);
	}
	
	@PutMapping("/patients/{id}")
	public ResponseEntity<patient> updatePatient(@PathVariable Long id, @RequestBody patient patientDetails) throws AttributeNotFoundException{
		
		patient patient = patientRepository.findById(id)
				.orElseThrow(() -> new AttributeNotFoundException("ABCD" + id));
		
		patient.setAge(patientDetails.getAge());
		patient.setName(patientDetails.getName());
		patient.setBlood(patientDetails.getBlood());
		patient.setDose(patientDetails.getDose());
		patient.setFees(patientDetails.getFees());
		patient.setPrescription(patientDetails.getPrescription());
		patient.setUrgency(patientDetails.getUrgency());
		patient.setId(patientDetails.getId());
		
		patient updatedPatient = patientRepository.save(patient);
		return ResponseEntity.ok(updatedPatient);
	}
	
	@DeleteMapping("/patients/{id}")
	public ResponseEntity<Map<String,Boolean>> deletePatient(@PathVariable Long id) throws AttributeNotFoundException{
		
		patient patient = patientRepository.findById(id)
				.orElseThrow(() -> new AttributeNotFoundException("ABCD" + id));
		
		patientRepository.delete(patient);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	
	
	
	
}
