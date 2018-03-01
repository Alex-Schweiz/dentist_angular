import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { AboutModule } from './about/about.module';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { BlogModule } from './blog/blog.module';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    ServicesComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    CoreModule,
    AboutModule,
    BlogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
