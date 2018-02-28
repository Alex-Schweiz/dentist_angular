import { Component, OnInit } from '@angular/core';

import { SocialIcon } from '../../core/shared/social-icon.model';
import { CoreService } from '../../core/shared/core.service';

@Component({
  selector: 'app-blog-right-panel',
  templateUrl: './blog-right-panel.component.html',
  styleUrls: ['./blog-right-panel.component.css']
})
export class BlogRightPanelComponent implements OnInit {
  dentistSocialIcons: SocialIcon[];

  recentPosts = [
    {
    date: 'May 10, 2016',
    title: 'Things to do to overcome your dentist fears'
  }, {
    date: 'April 27, 2016',
    title: 'Avoiding bad breath'
  }, {
    date: 'April 17, 2016',
    title: 'First signs of Gum Disease'
  }, {
    date: 'April 29, 2016',
    title: 'Taking kids to a dentist: how to'
  }];

  postCategories = [
    {
    title: 'Preventive Care Tips'
  }, {
    title: 'Oral Diseases Signs'
  }, {
    title: 'Dentistry Treatments'
  }, {
    title: 'Oral Health Researches'
  }, {
    title: 'Cosmetic Dentistry'
  }, {
    title: 'Children`s Dentistry'
  }];

  archivesByMonth = [
    {
    month: 'May 2015'
  }, {
    month: 'April 2015'
  }, {
    month: 'June 2015'
  }, {
    month: 'July 2015'
  }, {
    month: 'August 2015'
  }, {
    month: 'September 2015'
  }];

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.dentistSocialIcons = this.coreService.dentistSocialIcons;
  }

}
