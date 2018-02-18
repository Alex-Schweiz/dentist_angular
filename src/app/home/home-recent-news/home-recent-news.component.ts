import { Component, OnInit } from '@angular/core';

import { HomeRecentNews } from './home-recent-news.model'

@Component({
  selector: 'app-home-recent-news',
  templateUrl: './home-recent-news.component.html',
  styleUrls: ['./home-recent-news.component.css']
})
export class HomeRecentNewsComponent implements OnInit {

  recentNewsHeader = 'Recent news';
  recentNews: HomeRecentNews[] = [
    {
    imgPath: 'assets/img/home-02-370x370.jpg',
    link: '/',
    newsHeading: 'First signs of gum disease',
    author: 'John Doe',
    category: 'Dental',
    previewText: 'Gums disease is preceded by few very distinct symptoms.\n' +
    '          One of these is when you spit out blood after brushing your teeth...',
    date: 'May 10, 2016'
  }, {
    imgPath: 'assets/img/home-03-370x370.jpg',
    link: '/',
    newsHeading: 'Basic dental care 101',
    author: 'John Doe',
    category: 'Dental',
    previewText: 'Americans oftentimes ignore some basic, daily routines of oral hygiene, that need\n' +
    '          to be upheld. Practicing healthy habits like these ones will...',
    date: 'May 10, 2016'
  }, {
    imgPath: 'assets/img/home-04-370x370.jpg',
    link: '/',
    newsHeading: 'Avoiding bad breath',
    author: 'John Doe',
    category: 'Dental',
    previewText: 'Bad breath is a deal breaker both in business and in personal life of ours. And while\n' +
    '          breath fresheners or candies hide it, they do not cure the very problem at hand… So,\n' +
    '          most importantly, the bad breath is caused by a lack of oral…',
    date: 'May 10, 2016'
  }, ];
  seeAllNews = 'See all news';

  constructor() { }

  ngOnInit() {
  }

}
