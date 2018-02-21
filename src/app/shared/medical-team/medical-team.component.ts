import { Component, OnInit } from '@angular/core';

import { MedicalTeamMember } from './medical-team.model';

@Component({
  selector: 'app-medical-team',
  templateUrl: './medical-team.component.html',
  styleUrls: ['./medical-team.component.css']
})
export class MedicalTeamComponent implements OnInit {

  teamMembers: MedicalTeamMember[] = [
    {
      imgPath: 'assets/img/elements-10-270x270.jpg',
      name: 'Dr. Mark Hoffman',
      majority: 'Dentist',
      description: 'Our clinic\'s Chief Medical Officer, Dr. Mark Hoffman has been working in this field of\n' +
      '          medical specialization since 2002. After founding his own clinic in 2010 he brought all\n' +
      '          his experience here. Most of all he loves to see you walk out with a bright wide smile!'
    }, {
      imgPath: 'assets/img/elements-11-270x270.jpg',
      name: 'Leslie Gross',
      majority: 'Dental Hygienist',
      description: 'Leslie is one of the most experienced dental hygienists in the county. She works at our dental\n' +
      '          clinic since day 1. No one contributed more to our customer\'s satisfaction and concerns resolving than she.'
    }, {
      imgPath: 'assets/img/elements-14-270x270.jpg',
      name: 'Dana Sims',
      majority: 'Practical Nurse',
      description: 'Dana previously served as a senior practical nurse at the Mayo clinic. She obtained her license by working hard\n' +
      '          after graduating from a medical college with cum laude honors. She truly represents all the care that our dental\n' +
      '          office is surrounded with and our patients feel that every time.'
    }, {
      imgPath: 'assets/img/elements-15-270x270.jpg',
      name: 'Kimberly Barker',
      majority: 'Patient Services Manager',
      description: 'Kimberly worked for numerous dental offices in the US and Canada during her 20 years long career. And while she\n' +
      '          will not drill your teeth personally, she will make sure that everything is running smoothly before, during and\n' +
      '          after your appointment!'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
