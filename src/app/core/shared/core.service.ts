import { Injectable } from '@angular/core';
import {SocialIcon} from './social-icon.model';

@Injectable()
export class CoreService {

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
}
