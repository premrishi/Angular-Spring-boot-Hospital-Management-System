import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMedicineComponent } from './update-medicine.component';

describe('UpdateMedicineComponent', () => {
  let component: UpdateMedicineComponent;
  let fixture: ComponentFixture<UpdateMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMedicineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
