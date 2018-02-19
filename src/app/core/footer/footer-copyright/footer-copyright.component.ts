import { Component, OnInit } from '@angular/core';

import { SocialIcon } from '../../shared/social-icon.model';
import { CoreService } from '../../shared/core.service';

@Component({
  selector: 'app-footer-copyright',
  templateUrl: './footer-copyright.component.html',
  styleUrls: ['./footer-copyright.component.css']
})
export class FooterCopyrightComponent implements OnInit {
  dentistSocialIcons: SocialIcon[];

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.dentistSocialIcons = this.coreService.dentistSocialIcons;
  }

}
