import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesSingleComponent } from './services-single/services-single.component';

const servicesRoutes: Routes = [
  { path: '', component: ServicesComponent, children: [
      { path: '', component: ServicesListComponent },
      { path: ':id', component: ServicesSingleComponent },
    ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(servicesRoutes)
  ],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
