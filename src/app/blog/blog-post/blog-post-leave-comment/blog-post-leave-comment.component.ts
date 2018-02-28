import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-post-leave-comment',
  templateUrl: './blog-post-leave-comment.component.html',
  styleUrls: ['./blog-post-leave-comment.component.css']
})
export class BlogPostLeaveCommentComponent implements OnInit {
  commentForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm () {
    const senderName = '';
    const senderEmail = '';
    const message = '';

    this.commentForm = new FormGroup({
      'name': new FormControl(senderName, Validators.required),
      'email': new FormControl(senderEmail, Validators.required),
      'message': new FormControl(message, Validators.required),
    });
  }

  onSubmit () {
    console.log(this.commentForm.value);
  }

}
