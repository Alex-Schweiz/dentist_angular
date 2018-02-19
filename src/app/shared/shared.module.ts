import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedWhyChooseOurClinicComponent } from './shared-why-choose-our-clinic/shared-why-choose-our-clinic.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedWhyChooseOurClinicComponent
  ],
  exports: [
    SharedWhyChooseOurClinicComponent
  ]
})
export class SharedModule { }
