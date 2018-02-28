import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRightPanelComponent } from './blog-right-panel.component';

describe('BlogRightPanelComponent', () => {
  let component: BlogRightPanelComponent;
  let fixture: ComponentFixture<BlogRightPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogRightPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogRightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
