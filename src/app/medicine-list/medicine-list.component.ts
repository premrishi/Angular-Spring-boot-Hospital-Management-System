import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  medicines: Medicine[];

  constructor(private medicineService: MedicineService,
    private router: Router) { }

  ngOnInit(): void {

    this.getMedicines();

  }

  private getMedicines(){
    this.medicineService.getMedicinesList().subscribe(data => {this.medicines = data;
    });

}

updateMedicine(id: number){

  this.router.navigate(['updatemedicine', id]);

}

deleteMedicine(id: number){
  this.medicineService.deleteMedicine(id).subscribe( data => { 
    console.log(data);
    this.getMedicines();
  })
}
}
