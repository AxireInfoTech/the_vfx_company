import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin_username: string = '';
  admin_password: string = '';

  constructor(private adminService: AdminService,private router : Router) {}

  ngOnInit(): void {
  }

  onLogin(){
    // this.adminService.adminLogin(this.admin_username,this.admin_password)
    // .subscribe(res=>{
    //   console.log(res);
    //   if(res.admin_loggedIn){
    //     this.adminService.admin_username = this.admin_username;
    //     this.adminService.admin_password = this.admin_password;
    //     this.router.navigate(['/admin/panel']);

    //   }
    // },err=>{
    //   console.log(err.error);
    // })
    this.router.navigate(['/admin/panel']);
  }

}
