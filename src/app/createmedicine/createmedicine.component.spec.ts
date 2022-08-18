import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemedicineComponent } from './createmedicine.component';

describe('CreatemedicineComponent', () => {
  let component: CreatemedicineComponent;
  let fixture: ComponentFixture<CreatemedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatemedicineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatemedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
