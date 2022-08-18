import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  
  private baseUrl = "http://localhost:8080/api/v1/patients";

  constructor(private httpClient: HttpClient) { }
  
  getPatientslist(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(`${this.baseUrl}`, patient);
  }

  getPatientById(id: number): Observable<Patient> {   
    return this.httpClient.get<Patient>(`${this.baseUrl}/${id}`);
  }

  updatePatient(id: number, patient: Patient): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, patient);
  }

  deletePatient(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
