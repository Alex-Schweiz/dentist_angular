import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueStripeComponent } from './blue-stripe.component';

describe('BlueStripeComponent', () => {
  let component: BlueStripeComponent;
  let fixture: ComponentFixture<BlueStripeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueStripeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueStripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
