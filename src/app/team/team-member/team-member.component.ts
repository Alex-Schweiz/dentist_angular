import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

  teamMember = {
    name: 'Dr.Mark Hoffman',
    imgPath: 'assets/img/team-member-01-550x550.jpg',
    honours: 'MBBS, DCH, DRCOG, MRCGP',
    description: '<p>Our clinic\'s Chief Medical Officer, Dr. Mark Hoffman has been working in this\n' +
    '        field of medical specialization since 2002.</p>\n' +
    '      <p>A Columbia medical school graduate, this man excelled his dentistry skills while working in many\n' +
    '        dental offices across the US. Also, he encountered his future partners there.</p>\n' +
    '      <p>After founding his own clinic in 2010 he brought all his experience here. As well as the experience of\n' +
    '        4 other fellow dentists, whom he brought into this new dental practice.</p>\n' +
    '      <p>Most of all he loves to see you walk into our office with a dental healthcare concern. Only before\n' +
    '        you walk out from us with a bright wide smile!</p>',
    certifications: [
      'assets/img/sertificate-01-370x370.jpg',
      'assets/img/sertificate-02-370x370.jpg',
      'assets/img/sertificate-03-370x370.jpg'
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
