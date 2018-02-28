import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

const blogRoutes: Routes = [
  { path: '', component: BlogComponent, children: [
      { path: '', component: BlogListComponent },
      { path: ':id', component: BlogPostComponent },
    ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(blogRoutes)
  ],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
