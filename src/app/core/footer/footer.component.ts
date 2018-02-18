import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerDescription = 'AlexDentist Dental clinic is here to fix any dental health concern you might have. Our diverse\n' +
    '          team of professionals and our customer service oriented approach will make you for once\n' +
    '          feel comfortable while sitting in a dentist\'s chair!';
  footerOurServices = 'Our services';
  footerListServices = [
    {
    link: '/',
    name: 'General and preventive care'
  }, {
    link: '/',
    name: 'Cosmetic Solutions'
  }, {
    link: '/',
    name: 'Restorative solutions'
  }, {
    link: '/',
    name: 'Additional treatments'
  }, {
    link: '/',
    name: 'Orthodontics'
  }, {
    link: '/',
    name: 'Dentures & denture repair'
  }, {
    link: '/',
    name: 'Diagnostics'
  }, {
    link: '/',
    name: 'Pediatric dentistry'
  }, ];
  footerOpeningHours = 'Opening hours';

  constructor() { }

  ngOnInit() {
  }

}
