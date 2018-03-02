import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeRecentNewsComponent } from './home-recent-news/home-recent-news.component';
import { HomeWelcomeWordsComponent } from './home-welcome-words/home-welcome-words.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomeHowWeCanHelpComponent } from './home-how-we-can-help/home-how-we-can-help.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeSliderComponent,
    HomeWelcomeWordsComponent,
    HomeHowWeCanHelpComponent,
    HomeRecentNewsComponent,
    HomeComponent
  ]
})
export class HomeModule {}
