import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { AboutComponent } from './about.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  declarations: [
    AboutComponent,
    AboutUsComponent
  ]
})
export class AboutModule {}
