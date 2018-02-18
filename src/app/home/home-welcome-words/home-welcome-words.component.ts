import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-welcome-words',
  templateUrl: './home-welcome-words.component.html',
  styleUrls: ['./home-welcome-words.component.css']
})
export class HomeWelcomeWordsComponent implements OnInit {

  imagePath = 'assets/img/home-01-550x550.jpg';
  sectionHeading: 'Welcome to BeDentist';
  sectionWelcomeText = `<h4>Dental clinic BeDentist welcomes you!</h4>
      <p>We’re glad you hand your dental health concerns to our skilled hands.
        We’ll make sure to deliver the best possible healthcare to all our patients!
        Of course, we always complement our main services with a customer service oriented approach.</p>
      <p>We sincerely believe that visiting a dentist shouldn’t be a frightening or stressful experience!
        We provide an equally comfortable experience of relaxation for all our young and adult customers!
        Also we implement a lot of pain management and anesthesia options. <span class="italic text-extra-bold">Everything
                   we do is aimed at making you feel comfortable, while we take care of your oral healthcare!</span></p>
      <p>It includes both local anesthesia for mouth-numbing as well as a sedative anesthesia.
        Altogether, this helps relief any pain which might occur in the process of treatment.
        All in all, we’ve got it all under control at our BeDentist dental health clinic.</p>
      <p>We invite you to explore the information about our dental office on our website!
        Feel free to read our terms and conditions and all the additional info we have posted here.</p>
      <p>Once our customer, you will be leaving our dental clinic with a bright, wide smile!</p>`;

  constructor() { }

  ngOnInit() {
  }

}
