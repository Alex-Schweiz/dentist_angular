import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostLeaveCommentComponent } from './blog-post-leave-comment.component';

describe('BlogPostLeaveCommentComponent', () => {
  let component: BlogPostLeaveCommentComponent;
  let fixture: ComponentFixture<BlogPostLeaveCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostLeaveCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostLeaveCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
