import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  sendForm:boolean = false
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    companyName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    text: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}

  get name() {
    return this.form.get('name');
  }
  get companyName(){
    return this.form.get('companyName')
  }
  get phone(){
    return this.form.get('phone')
  }
  get email(){
    return this.form.get('email')
  }
  send(){
    this.sendForm = true
  }
}
