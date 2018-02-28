import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogArticles = [{
    title: 'Avoiding bad breath',
    author: 'John Doe',
    date: 'May 10, 2016',
    category: 'Dental',
    imgPath: 'assets/img/categories-list-01-770x562.jpg',
    shortDescription: 'Americans oftentimes ignore some basic, daily routines of oral hygiene, that need to be upheld.\n' +
    '          Practicing healthy habits like these ones will most surely help you avoid such nasty things as a morning\n' +
    '          bad breath or teeth grinding.',
    commentsNumber: '31'
  }, {
    title: 'Avoiding bad breath',
    author: 'John Doe',
    date: 'May 10, 2016',
    category: 'Dental',
    imgPath: 'assets/img/categories-list-03-770x562.jpg',
    shortDescription: 'Americans oftentimes ignore some basic, daily routines of oral hygiene, that need to be upheld.\n' +
    '          Practicing healthy habits like these ones will most surely help you avoid such nasty things as a morning\n' +
    '          bad breath or teeth grinding.',
    commentsNumber: '25'
  }, {
    title: 'Avoiding bad breath',
    author: 'John Doe',
    date: 'May 10, 2016',
    category: 'Dental',
    imgPath: 'assets/img/categories-list-04-770x562.jpg',
    shortDescription: 'Americans oftentimes ignore some basic, daily routines of oral hygiene, that need to be upheld.\n' +
    '          Practicing healthy habits like these ones will most surely help you avoid such nasty things as a morning\n' +
    '          bad breath or teeth grinding.',
    commentsNumber: '27'
  }];

  constructor() { }

  ngOnInit() {
  }

}
