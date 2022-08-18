import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.css']
})
export class CreatepatientComponent implements OnInit {

  patient: Patient = new Patient();
  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePatient() {
    this.patientService.createPatient(this.patient).subscribe(data => {
      console.log(data);
      this.goToPatientList();
  }, 
  error => console.log(error));
}
  goToPatientList() {
    this.router.navigate(['/docdash']);
    

  }

  onSubmit() {
    console.log(this.patient);
    this.savePatient();
  }

}
