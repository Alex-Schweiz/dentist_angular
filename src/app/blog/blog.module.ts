import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { BlogRoutingModule } from './blog-routing.module';

import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogRightPanelComponent } from './blog-right-panel/blog-right-panel.component';
import { BlogPostComponent } from './blog-post/blog-post.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    BlogRoutingModule
  ],
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogRightPanelComponent,
    BlogPostComponent,
  ]
})
export class BlogModule {}
