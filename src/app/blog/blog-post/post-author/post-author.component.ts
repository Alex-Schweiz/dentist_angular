import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-author',
  templateUrl: './post-author.component.html',
  styleUrls: ['./post-author.component.css']
})
export class PostAuthorComponent implements OnInit {

  author = {
    imgPath: 'assets/img/author-138x138.png',
    name: 'Mark Hoffmann',
    shortDescription: 'Our clinic\'s Chief Medical Officer and Founder, Dr. Mark. Hoffman has been working in this field of medical specialization since 2002.'
  };

  constructor() { }

  ngOnInit() {
  }

}
