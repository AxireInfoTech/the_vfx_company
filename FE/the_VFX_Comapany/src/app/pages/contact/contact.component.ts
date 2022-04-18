import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  name: string = "";
  mail: string = "";
  message: string = "";
  submit = false;
  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      mail: new FormControl(null,[Validators.required, Validators.email]),
      message: new FormControl(null)
    });
    this.contactForm.statusChanges.subscribe(v=>console.log(v));

  }

  onSubmit(){
    // console.log(this.contactForm);
  }
}
