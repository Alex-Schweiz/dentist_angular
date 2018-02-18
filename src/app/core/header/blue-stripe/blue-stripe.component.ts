import { Component, OnInit } from '@angular/core';

import { SocialIcon } from './social-icon.model';

@Component({
  selector: 'app-blue-stripe',
  templateUrl: './blue-stripe.component.html',
  styleUrls: ['./blue-stripe.component.css']
})
export class BlueStripeComponent implements OnInit {

  dentistSocialIcons: SocialIcon[] = [{
    icon: 'fa-facebook',
    link: 'https://www.facebook.com/World.Of.Dentistry/'
  }, {
    icon: 'fa-twitter',
    link: 'https://www.facebook.com/World.Of.Dentistry/'
  }, {
    icon: 'fa-google-plus',
    link: 'https://www.facebook.com/World.Of.Dentistry/'
  }, {
    icon: 'fa-youtube',
    link: 'https://www.facebook.com/World.Of.Dentistry/'
  }, {
    icon: 'fa-rss',
    link: 'https://www.facebook.com/World.Of.Dentistry/'
  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
