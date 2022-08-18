import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html', 
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent implements OnInit {
  searchText: string;
  patients: Patient[]; 

  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPatients();
    
  }

  private getPatients(){
    this.patientService.getPatientslist().subscribe(data => { this.patients = data; 
    });
  }

  viewPatient(id: number) {

    this.router.navigate(['viewpatient', id]);

  }
  updatePatient(id: number) {

    this.router.navigate(['updatepatient', id]);

  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe(data => {
      console.log(data);
      this.getPatients();
    } ); 
  }

}
