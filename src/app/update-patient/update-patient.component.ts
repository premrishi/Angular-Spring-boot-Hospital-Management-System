import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  id: number;
  patient: Patient = new Patient();
  constructor(private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router) { }

 

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
    }, error => console.log(error) );


  }
  
 

  onSubmit() {
    this.patientService.updatePatient(this.id, this.patient).subscribe(data => {
      this.goToPatientlist();
    }
    , error => console.log(error));
  }

  goToPatientlist() {
    this.router.navigate(['/docdash']);
  }
}
