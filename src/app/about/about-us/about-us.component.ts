import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  bigImgPath = 'assets/img/about-us-01-1170x550.jpg';
  smallImgPath = 'assets/img/about-us-02-550x550.jpg';
  aboutUsText = `<h4>Our dental clinic has been founded in 2010. The founder is an honorable
          alumni of NYC's Columbia medical school - Mark Hoffmann, MD.</h4>
        <p>After 8 previous years of practicing, he and his colleagues collaborated to found
          their own clinic. Coming from backgrounds of miscellaneous dental institutions of the
          US, they complement each other. Their common clinic became known as BeDentist!</p>
        <p>The state of Pennsylvania highly appreciates our contribution to state's dental healthcare.
          Just as our local patients in the upstate Potter county of Pennsylvania.</p>
        <p>We combine extensive record of practical experience with an equal focus on customer service
          approach. In the last 6 years, our dental clinic grew a list of returning clients!</p>
        <p class="italic text-extra-bold">We look forward to you becoming one of them as well!</p>`;

  constructor() { }

  ngOnInit() {
  }

}
