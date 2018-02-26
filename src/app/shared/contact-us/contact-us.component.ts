import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;

  constructor() {
    this.initForm();
  }

  ngOnInit() {
  }

  private initForm () {
    const senderName = '';
    const senderEmail = '';
    const subject = '';
    const message = '';

    this.contactUsForm = new FormGroup({
      'name': new FormControl(senderName, Validators.required),
      'email': new FormControl(senderEmail, Validators.required),
      'subject': new FormControl(subject, Validators.required),
      'message': new FormControl(message, Validators.required),
    });
  }

  onSubmit () {
    console.log(this.contactUsForm.value);
  }

}
