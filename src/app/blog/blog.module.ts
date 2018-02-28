import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { BlogRoutingModule } from './blog-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogRightPanelComponent } from './blog-right-panel/blog-right-panel.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PostAuthorComponent } from './blog-post/post-author/post-author.component';
import { BlogPostCommentComponent } from './blog-post/blog-post-comment/blog-post-comment.component';
import { BlogPostLeaveCommentComponent } from './blog-post/blog-post-leave-comment/blog-post-leave-comment.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    BlogRoutingModule
  ],
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogRightPanelComponent,
    BlogPostComponent,
    PostAuthorComponent,
    BlogPostCommentComponent,
    BlogPostLeaveCommentComponent,
  ]
})
export class BlogModule {}
