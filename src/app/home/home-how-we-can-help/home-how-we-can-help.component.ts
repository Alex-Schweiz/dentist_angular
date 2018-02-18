import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-how-we-can-help',
  templateUrl: './home-how-we-can-help.component.html',
  styleUrls: ['./home-how-we-can-help.component.css']
})
export class HomeHowWeCanHelpComponent implements OnInit {

  mainHeader = 'How we can help...';
  subHeader = 'We offer a wide range of procedures to help you get the perfect smile.';
  bookAppointment = 'Book an Appointment';

  constructor() { }

  ngOnInit() {
  }

}
