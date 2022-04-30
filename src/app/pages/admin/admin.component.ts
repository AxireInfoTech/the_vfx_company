import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private fb: FormBuilder,private adminService: AdminService) {}
  myForm: FormGroup;

  ngOnInit() {
    this.myForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required,]],
      // message: ['', [Validators.required, Validators.minLength(15)]],
    });  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.userName);
    console.log('Email', form.value.password);
    // this.adminService.adminLogin(form.value.userName,form.value.password)
    // .subscribe(res=>{
    //   if(res.admin_loggedIn){

    //   }
    // })
  }
}
