import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocloginComponent } from './doclogin.component';

describe('DocloginComponent', () => {
  let component: DocloginComponent;
  let fixture: ComponentFixture<DocloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
