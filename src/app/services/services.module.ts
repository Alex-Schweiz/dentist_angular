import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesRoutingModule } from './services-routing.module';

import { ServicesComponent } from './services.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesSingleComponent } from './services-single/services-single.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    ServicesRoutingModule
  ],
  declarations: [
    ServicesComponent,
    ServicesListComponent,
    ServicesSingleComponent
  ]
})
export class ServicesModule {}
