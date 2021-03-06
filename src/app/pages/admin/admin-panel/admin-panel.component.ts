import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Client } from 'ionic/lib/http';
import { client } from 'src/app/services/admin.interface';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/firebaseauth.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  clientData: client[] = [];
  ourPortfolioPosts: string[] = [];

  constructor(
    private adminService: AdminService,
    private router : Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    if(this.adminService.admin_username == '' && this.adminService.admin_password == ''){
      this.router.navigate(['/admin/login']);
    }
    this.readPortfolio()
    this.readGarages();
  }

  onCreate(){
    this.router.navigate(['/admin/create']);
  }

  readPortfolio(){
    this.adminService.readOurPortfolio().subscribe(res=>{
      console.log(res)
      this.adminService.ourPortfolioPosts = res.posts
      this.ourPortfolioPosts = res.posts
    })
  }

  readGarages(){
    this.adminService.readGarages().subscribe(res=>{
      // console.log(res)
      this.adminService.clientData = []
      for(const item in res){
        this.adminService.clientData.push({id: item, name: res[item].name, review: res[item].review, img: res[item].img, posts: res[item].posts})
      }
      this.clientData = this.adminService.clientData
      console.log(this.clientData)
      // this.clientData = res.body;
      // this.adminService.clientData = res.body;
    })
    // this.clientData = this.adminService.clientData
  }

  onEdit(item: client){
    this.adminService.editClientData = item;
    this.router.navigate(['/admin/edit']);

  }

  onEditPosts(){
    this.adminService.ourPortfolioPosts = this.ourPortfolioPosts;
    this.router.navigate(['/admin/edit-ourportfolio']);
  }

  onDelete(id:string){
    console.log(id)
    this.adminService.deleteGarage(id).subscribe(res=>{
      // console.log(res);

      this.readGarages();
      // console.log(res);
    },
    err=>{
      console.log(err.error);
    })
    // console.log(id);
  }

  
  logOut(){
    this.authService.SignOut();
  }

}
