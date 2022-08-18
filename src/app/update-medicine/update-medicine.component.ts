import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';


@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit {

  id: number;
  medicine: Medicine = new Medicine();
  constructor(private medicineService: MedicineService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data => {
      this.medicine = data;
    } 
    , error => console.log(error));
  }

  onSubmit() {
    this.medicineService.updateMedicine(this.id, this.medicine).subscribe(data => { 
      this.goToMedicineList();
    } 
    , error => console.log(error));

  }

  goToMedicineList() {
    this.router.navigate(['/medicinelist']);
  }

}
