import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  servicesHeader = 'Our dental clinic’s team provides many kinds of dentistry services such as:';

  servicesList = [{
    imgPath: 'assets/img/services-04-270x270.jpg',
    serviceName: 'General and preventive care',
    shortDescription: 'A wide range for a preventive and general dentistry care. We put focus on examining root canals\n' +
    '          and the overview state of teeth’s health.'
  }, {
    imgPath: 'assets/img/services-5-270x270.jpg',
    serviceName: 'Cosmetic solutions',
    shortDescription: 'Our range of cosmetic dentistry solutions includes such vitals as teeth whitening as well as a laser dentistry.'
  },  {
    imgPath: 'assets/img/services-6-270x270.jpg',
    serviceName: 'Restorative solutions',
    shortDescription: 'Restoring teeth in bad condition is what we specialize in. It may include laser restoration and Invisalign service.'
  },  {
    imgPath: 'assets/img/services-7-270x270.jpg',
    serviceName: 'Additional treatments',
    shortDescription: 'People’s dentistry issues may vary. That’s why we have a lot of non-conventional treatments, including X-ray scanning.'
  }, {
    imgPath: 'assets/img/services-20-270x270.jpg',
    serviceName: 'Orthodontics',
    shortDescription: 'Diagnodent is an important part of our Orthodontics services. We also have a diverse choice of braces and\n' +
    '          brackets for teeth straightening.'
  }, {
    imgPath: 'assets/img/services-21-270x270.jpg',
    serviceName: 'Dentures & denture repair',
    shortDescription: 'If you need a new denture or if you’re in need of fixing your old one, broken denture – we’re at your service!'
  },  {
    imgPath: 'assets/img/services-22-270x270.jpg',
    serviceName: 'Diagnostics',
    shortDescription: 'Teeth cleanings, Fluoride and Sealant are just a few of our advanced diagnostics and preventive dentistry services!'
  },  {
    imgPath: 'assets/img/services-23-270x270.jpg',
    serviceName: 'Pediatric dentistry',
    shortDescription: 'It’s crucial to check Children’s Oral Health even more often, than the adults’ teeth. That is due to baby teeth,\n' +
    '          and we know how to fix that!'
  }, ];

  constructor() { }

  ngOnInit() {
  }

}
