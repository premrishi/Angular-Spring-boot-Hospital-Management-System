package com.example.doclogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.doclogin.model.Medicine;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {

}
