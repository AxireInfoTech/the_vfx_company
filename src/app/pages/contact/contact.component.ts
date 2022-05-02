import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  successStatus: boolean;

  name: string = '';

  email: string = '';

  message: string = '';

  error: string = '';
  constructor() { }

  ngOnInit(): void {

  }

  public sendEmail(e: Event) {

    e.preventDefault();
    if(this.name.length === 0){
      this.error = 'Please Enter Name'
    }else if(this.email.length === 0){
      this.error = 'Plese Enter Email Id or Mobile No.'
      
    }else if(this.message.length === 0){
      this.error = 'Please Enter Message.'
    }else if(this.email.length > 0){
      if(this.email.includes('@')){
        this.error = ''
      }else if(this.email.length === 10 && !isNaN(Number(this.email)) ){
        this.error = ''
      }else{
        this.error = 'Please Enter valid Email Id or Mobile No.'
      }
    }
    if(this.error === ''){
      emailjs.sendForm('service_7tk1tig', 'template_7409e3c', e.target as HTMLFormElement, 'user_yOiOGkOy0P6G0HdqCLKjY')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.name = ''
        this.email = ''
        this.message = ''
        this.successStatus = true
      }, (error) => {
        console.log(error.text);
      });
    }
  }}
