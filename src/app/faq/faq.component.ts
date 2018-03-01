import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqTitle = 'FAQ';
  faqDescription = 'You can use our website calculator to approximate a price for your dental appointment.\n' +
    '        Specify appointment details and see the projections of how much exactly will it cost you!';
  faqQuestions = [{
    question: 'Do you provide dental care for patients covered under a Medicaid plan?',
    answer: 'Yes, we provide dental care for anyone who has this type of healthcare included. Regardless\n' +
    '                        of whether it is under their Medicaid, Affordable Care Act or any other similar healthcare insurance plan.'
  }, {
    question: 'How long is the first appointment?',
    answer: 'It may vary, but\n' +
    '                        generally speaking, the first appointment will be merely a consulting one. Our dentist or dental hygienist will\n' +
    '                        be checking the overall state of your oral health. Then a dentist will provide recommendations on any further dental\n' +
    '                        procedures you might need.'
  }, {
    question: 'Do you provide dental care for patients covered under a Medicaid plan?',
    answer: 'Yes, we provide dental care for anyone who has this type of healthcare included. Regardless\n' +
    '                        of whether it is under their Medicaid, Affordable Care Act or any other similar healthcare insurance plan.'
  }, {
    question: 'Why is visiting the dentist so important?',
    answer: 'Visiting the dentist on a\n' +
    '                        regular, monthly basis will not only help keep your teeth and oral health intact. It will also help keep the rest of your\n' +
    '                        body healthy.' +
    '<p class="text-extra-bold text-gray-light text-left">Dental care is important because it:</p>\n' +
    '        <ul class="italic text-gray-light">\n' +
    '          <li><span class="text-gray-light">Fights teeth decay</span></li>\n' +
    '          <li><span class="text-gray-light">Helps to prevent miscellaneous periodontal (gum) diseases, which eventually can lead to tooth loss</span></li>\n' +
    '          <li><span class="text-gray-light">Prevents bad breath. So besides brushing and flossing, seeing the dentist regularly will help eliminate the bacteria\n' +
    '                            that causes a bad smell</span></li>\n' +
    '          <li><span class="text-gray-light">Awards you with a snow-white smile and a new breath of confidence!</span></li>\n' +
    '          <li><span class="text-gray-light">Helps keep teeth shiny by preventing them being stained by food, drinks, and cigarettes</span></li>\n' +
    '          <li><span class="text-gray-light">Makes your teeth stronger which allows you to eat any food you want, at any age!</span></li>\n' +
    '        </ul>'
  }, {
    question: 'My teeth feel fine; do I still need to see a dentist?',
    answer: ' You may feel fine and think that\n' +
    '                        your oral health is at no risk. But the thing is, that only a professional dentist can detect dental problems on early stages.\n' +
    '                        This might happen only during a regular dental checkup. Caries, food staining, gums problems and teeth weakening are just a\n' +
    '                        few such issues that can go unnoticed for quite a while. Also, you need to take advantage of all the modern dental\n' +
    '                        medicine to fix any issues you did not fix earlier (like broken, chipped teeth etc...).'
  }, {
    question: 'How can I take care of my teeth in between dental checkups?',
    answer: 'Visiting the dentist on a regular,\n' +
    '                        monthly basis will not only help keep your teeth and oral health intact. It will also help keep the rest of your body healthy.' +
    '<p class="text-extra-bold text-gray-light text-left">Dental care is important because it:</p>\n' +
    '        <ul class="italic text-gray-light">\n' +
    '          <li><span class="text-gray-light">Do not forget to brush your teeth, at least, two times a day (5 minutes each time). Floss at least once a day!</span></li>\n' +
    '          <li><span class="text-gray-light">Use only a fluoride containing toothpaste. Ask your dentist if you also might need a fluoride rinse.\n' +
    '                            This will prevent any cavities in the future!</span></li>\n' +
    '          <li><span class="text-gray-light">Avoid sugary drinks, foods and cigarettes as much as possible. These harm the overall immunity of your mouth and stain your teeth badly.</span></li>\n' +
    '          <li><span class="text-gray-light">When brushing teeth, brush your tongue as well! By doing so you will remove food particles and reduce a number of mouth bacteria.</span></li>\n' +
    '          <li><span class="text-gray-light">Tongue brushing will make your breath much fresher!</span></li>\n' +
    '          <li><span class="text-gray-light">Be sure to schedule your regular, routine check-ups. It is recommended to check your teeth at least twice a year or even more often.</span></li>\n' +
    '        </ul>'
  }, {
    question: 'At what age should I start taking my child to see the dentist?',
    answer: 'We recommend you start taking kids as young as 5 years old to a regular dental healthcare checkups.'
  }, {
    question: 'When should I change my toothbrush?',
    answer: ' It is highly recommended to\n' +
    '                        change your toothbrush once in every month! That\'s based on what a majority of American dental institutions and numerous\n' +
    '                        researchers strongly suggest.'
  }];

  constructor() { }

  ngOnInit() {
  }

}
