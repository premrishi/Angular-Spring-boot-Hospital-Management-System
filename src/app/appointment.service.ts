import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = "http://localhost:8899/api/v3/appointments";


  constructor(private httpClient: HttpClient) { }

  getAppointmentslist(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(`${this.baseUrl}`, appointment);
  }

  getAppointmentById(id: number): Observable<Appointment> {   
    return this.httpClient.get<Appointment>(`${this.baseUrl}/${id}`);
  }


  deleteAppointment(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
