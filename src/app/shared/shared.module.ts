import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedWhyChooseOurClinicComponent } from './shared-why-choose-our-clinic/shared-why-choose-our-clinic.component';
import { MedicalTeamComponent } from './medical-team/medical-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SharedWhyChooseOurClinicComponent,
    MedicalTeamComponent,
    ContactUsComponent
  ],
  exports: [
    SharedWhyChooseOurClinicComponent,
    MedicalTeamComponent,
    ContactUsComponent
  ]
})
export class SharedModule { }
