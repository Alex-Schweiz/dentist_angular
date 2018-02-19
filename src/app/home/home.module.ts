import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRecentNewsComponent } from './home-recent-news/home-recent-news.component';
import { HomeWelcomeWordsComponent } from './home-welcome-words/home-welcome-words.component';
import { HomeOurServicesComponent } from './home-our-services/home-our-services.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomeHowWeCanHelpComponent } from './home-how-we-can-help/home-how-we-can-help.component';
import { HomeTestimonialsComponent } from './home-testimonials/home-testimonials.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  declarations: [
    HomeSliderComponent,
    HomeWelcomeWordsComponent,
    HomeOurServicesComponent,
    HomeTestimonialsComponent,
    HomeHowWeCanHelpComponent,
    HomeRecentNewsComponent,
    HomeComponent
  ]
})
export class HomeModule {}
