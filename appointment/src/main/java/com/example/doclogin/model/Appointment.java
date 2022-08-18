package com.example.doclogin.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="appointment")
public class Appointment {
	
	@Id
	private long id;
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name="name")
	private String name;
	@Column(name="age")
	private String age;
	@Column(name="symptoms")
	private String symptoms;
	@Column(name="number")
	private String number;
	
	public Appointment() {
		
	}
	
	public Appointment(String name, String age, String symptoms, String number) {
		super();
		this.name = name;
		this.age = age;
		this.symptoms = symptoms;
		this.number = number;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getSymptoms() {
		return symptoms;
	}
	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}

}
