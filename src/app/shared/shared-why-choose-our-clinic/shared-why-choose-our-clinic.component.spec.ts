import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhyChooseOurClinicComponent } from './shared-why-choose-our-clinic.component';

describe('HomeWhyChooseOurClinicComponent', () => {
  let component: HomeWhyChooseOurClinicComponent;
  let fixture: ComponentFixture<HomeWhyChooseOurClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWhyChooseOurClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWhyChooseOurClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
