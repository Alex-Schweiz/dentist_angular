import { Component, OnInit } from '@angular/core';

import { WhyChooseUs } from './shared-why-us.model';

@Component({
  selector: 'app-shared-why-choose-our-clinic',
  templateUrl: './shared-why-choose-our-clinic.component.html',
  styleUrls: ['./shared-why-choose-our-clinic.component.css']
})
export class SharedWhyChooseOurClinicComponent implements OnInit {

  headingSectionText = 'Why choose the AlexDentist clinic?';

  whyChooseUsSection: WhyChooseUs[] = [{
    icon: 'fa-book',
    heading: 'Easy booking',
    text: 'Booking an appointment at our dental clinic is as easy as doing 2 clicks!'
  }, {
    icon: 'fa-group',
    heading: 'Experience',
    text: 'Combined, our 5 dentists have over half a century of practical experience. They are ready to put it to action for you!'
  }, {
    icon: 'fa-clock-o',
    heading: 'Flexible schedule',
    text: 'We work during all state holidays, besides working till late during the regular days.\n' +
    '          In case of emergencies we accept weekend bookings.'
  }, {
    icon: 'fa-thumbs-up',
    heading: 'Best price guarantee',
    text: 'Our reasonable prices made thousands of people smile with a new, beautiful smile, as never before!!'
  }];

  constructor() { }

  ngOnInit() {
  }

}
