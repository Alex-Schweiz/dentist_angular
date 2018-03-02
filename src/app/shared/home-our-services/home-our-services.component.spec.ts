import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOurServicesComponent } from './home-our-services.component';

describe('HomeOurServicesComponent', () => {
  let component: HomeOurServicesComponent;
  let fixture: ComponentFixture<HomeOurServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOurServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOurServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
