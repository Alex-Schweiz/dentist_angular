import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWelcomeWordsComponent } from './home-welcome-words.component';

describe('HomeWelcomeWordsComponent', () => {
  let component: HomeWelcomeWordsComponent;
  let fixture: ComponentFixture<HomeWelcomeWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWelcomeWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWelcomeWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
