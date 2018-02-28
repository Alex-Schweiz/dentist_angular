import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post-comment',
  templateUrl: './blog-post-comment.component.html',
  styleUrls: ['./blog-post-comment.component.css']
})
export class BlogPostCommentComponent implements OnInit {

  commentAuthor = {
    imgPath: 'assets/img/comments-86x86.png',
    name: 'John Doe',
    date: 'May 10, 2016',
    content: 'This problem with bad breath has been killing me... After visiting this clinic, I feel so much more confident!'
  };

  constructor() { }

  ngOnInit() {
  }

}
