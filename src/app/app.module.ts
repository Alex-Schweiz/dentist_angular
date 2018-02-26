import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { AboutModule } from './about/about.module';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    CoreModule,
    AboutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
