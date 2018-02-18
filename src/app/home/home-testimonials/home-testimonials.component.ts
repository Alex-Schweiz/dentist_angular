import { Component, OnInit } from '@angular/core';

import { HomeTestimonial } from './home-testimonial.model';

@Component({
  selector: 'app-home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['./home-testimonials.component.css']
})
export class HomeTestimonialsComponent implements OnInit {

  mainHeading = 'What do our patients say?';

  homeTestimonials: HomeTestimonial[] = [{
    imgPath: 'assets/img/testimonials-01-116x116.jpg',
    testimonial: 'I urgently required dental help last 4th of July.\n' +
    '            And despite all other clinics being closed, BeDentist took my appointment!',
    author: 'Herbert Wallace',
    date: 'May 10, 2017'
  }, {
    imgPath: 'assets/img/testimonials-02-116x116.jpg',
    testimonial: 'Comparing teeth whitening prices here and elsewhere,\n' +
    '            I picked BeDentist. The result was beyond my expectations!',
    author: 'Gary Growles',
    date: 'May 10, 2016'
  }, {
    imgPath: 'assets/img/testimonials-03-116x116.jpg',
    testimonial: 'Taking my kids to a dentist has never been easier.\n' +
    '            They just loved the welcoming and warm atmosphere in there!',
    author: 'Daniela Robbery',
    date: 'May 10, 2018'
  }, ];

  constructor() { }

  ngOnInit() {
  }

}
