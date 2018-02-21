import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedWhyChooseOurClinicComponent } from './shared-why-choose-our-clinic/shared-why-choose-our-clinic.component';
import { MedicalTeamComponent } from './medical-team/medical-team.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedWhyChooseOurClinicComponent,
    MedicalTeamComponent
  ],
  exports: [
    SharedWhyChooseOurClinicComponent,
    MedicalTeamComponent
  ]
})
export class SharedModule { }
