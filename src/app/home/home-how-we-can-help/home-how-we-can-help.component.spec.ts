import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHowWeCanHelpComponent } from './home-how-we-can-help.component';

describe('HomeHowWeCanHelpComponent', () => {
  let component: HomeHowWeCanHelpComponent;
  let fixture: ComponentFixture<HomeHowWeCanHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHowWeCanHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHowWeCanHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
