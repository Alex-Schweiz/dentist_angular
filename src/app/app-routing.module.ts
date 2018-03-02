import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { FaqComponent } from './faq/faq.component';

const appRoutes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'team', loadChildren: './team/team.module#TeamModule' },
  { path: 'services', loadChildren: './services/services.module#ServicesModule' },
  { path: 'faq', component: FaqComponent },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

