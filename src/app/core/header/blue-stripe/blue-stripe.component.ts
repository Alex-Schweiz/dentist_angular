import { Component, OnInit } from '@angular/core';

import { SocialIcon } from '../../shared/social-icon.model';
import { CoreService } from '../../shared/core.service';

@Component({
  selector: 'app-blue-stripe',
  templateUrl: './blue-stripe.component.html',
  styleUrls: ['./blue-stripe.component.css']
})
export class BlueStripeComponent implements OnInit {
  dentistSocialIcons: SocialIcon[];

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.dentistSocialIcons = this.coreService.dentistSocialIcons;
  }

}
