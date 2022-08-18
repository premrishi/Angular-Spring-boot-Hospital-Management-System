import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';


@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {

  id: number;
  patient: Patient
  constructor(private route: ActivatedRoute, private patientService: PatientService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.patient = new Patient();
    this.patientService.getPatientById(this.id).subscribe(data => { 
      this.patient = data;
    } );
  }


}
