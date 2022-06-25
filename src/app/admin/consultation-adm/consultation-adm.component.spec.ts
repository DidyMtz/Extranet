import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationAdmComponent } from './consultation-adm.component';

describe('ConsultationAdmComponent', () => {
  let component: ConsultationAdmComponent;
  let fixture: ComponentFixture<ConsultationAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
