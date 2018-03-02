import { Component, OnInit } from '@angular/core';

import { HomeOurServices } from './home-our-services.model'

@Component({
  selector: 'app-home-our-services',
  templateUrl: './home-our-services.component.html',
  styleUrls: ['./home-our-services.component.css']
})
export class HomeOurServicesComponent implements OnInit {

  sectionHeading = 'Our services';

  ourServicesItems: HomeOurServices[] = [{
    imgPath: 'assets/img/services-04-270x270.jpg',
    link: '/',
    heading: 'General and preventive care'
  }, {
    imgPath: 'assets/img/services-5-270x270.jpg',
    link: '/',
    heading: 'Cosmetic solutions'
  }, {
    imgPath: 'assets/img/services-6-270x270.jpg',
    link: '/',
    heading: 'Restorative solutions'
  }, {
    imgPath: 'assets/img/services-7-270x270.jpg',
    link: '/',
    heading: 'Additional treatments'
  }, ];

  constructor() { }

  ngOnInit() {
  }

}
