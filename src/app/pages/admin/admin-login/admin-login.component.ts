import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/firebaseauth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin_username: string = '';
  admin_password: string = '';

  constructor(
    private adminService: AdminService,
    private router : Router,
    public authService: AuthService
    ) {}

  ngOnInit(): void {
  }

  onLogin(){
    this.authService.SignIn(this.admin_username,this.admin_password);
    // this.router.navigate(['/admin/panel']);
  }

}
