import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { BlueStripeComponent } from './core/header/blue-stripe/blue-stripe.component';
import { HomeSliderComponent } from './home/home-slider/home-slider.component';
import { HomeWelcomeWordsComponent } from './home/home-welcome-words/home-welcome-words.component';
import { HomeWhyChooseOurClinicComponent } from './home/home-why-choose-our-clinic/home-why-choose-our-clinic.component';
import { HomeOurServicesComponent } from './home/home-our-services/home-our-services.component';
import { HomeTestimonialsComponent } from './home/home-testimonials/home-testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlueStripeComponent,
    HomeSliderComponent,
    HomeWelcomeWordsComponent,
    HomeWhyChooseOurClinicComponent,
    HomeOurServicesComponent,
    HomeTestimonialsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
