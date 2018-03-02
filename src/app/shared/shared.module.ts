import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedWhyChooseOurClinicComponent } from './shared-why-choose-our-clinic/shared-why-choose-our-clinic.component';
import { MedicalTeamComponent } from './medical-team/medical-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeOurServicesComponent } from './home-our-services/home-our-services.component';
import { HomeTestimonialsComponent } from './home-testimonials/home-testimonials.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    SharedWhyChooseOurClinicComponent,
    MedicalTeamComponent,
    ContactUsComponent,
    HomeOurServicesComponent,
    HomeTestimonialsComponent
  ],
  exports: [
    SharedWhyChooseOurClinicComponent,
    MedicalTeamComponent,
    ContactUsComponent,
    HomeOurServicesComponent,
    HomeTestimonialsComponent
  ]
})
export class SharedModule { }
