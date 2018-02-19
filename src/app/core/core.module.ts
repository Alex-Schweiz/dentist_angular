import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueStripeComponent } from './header/blue-stripe/blue-stripe.component';
import { FooterCopyrightComponent } from './footer/footer-copyright/footer-copyright.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoreService } from './shared/core.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    BlueStripeComponent,
    FooterComponent,
    FooterCopyrightComponent
  ],
  exports: [
    HeaderComponent,
    BlueStripeComponent,
    FooterComponent,
    FooterCopyrightComponent
  ],
  providers: [ CoreService ],
})
export class CoreModule {}
