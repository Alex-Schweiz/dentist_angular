import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalTeamComponent } from './medical-team.component';

describe('MedicalTeamComponent', () => {
  let component: MedicalTeamComponent;
  let fixture: ComponentFixture<MedicalTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
