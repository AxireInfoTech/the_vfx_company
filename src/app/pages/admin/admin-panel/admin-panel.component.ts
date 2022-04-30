import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'ionic/lib/http';
import { client } from 'src/app/services/admin.interface';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  clientData: client[] = [];
  ourPortfolioPosts: string[] = [];

  constructor(private adminService: AdminService,private router : Router) { }

  ngOnInit(): void {
    if(this.adminService.admin_username == '' && this.adminService.admin_password == ''){
      this.router.navigate(['/admin/login']);
    }
    this.readGarages();
  }

  onCreate(){
    this.router.navigate(['/admin/create']);
  }

  readGarages(){
    this.adminService.readGarages().subscribe(res=>{
      // console.log(res)
      this.adminService.clientData = []
      for(const item in res){
        this.adminService.clientData.push({id: item, name: res[item].name, img: res[item].img, posts: res[item].posts})
      }
      this.clientData = this.adminService.clientData
      console.log(this.clientData)
      // this.clientData = res.body;
      // this.adminService.clientData = res.body;
    })
    // this.clientData = this.adminService.clientData
  }

  onEdit(item: client){
    

  }

  onEditPosts(){
    this.adminService.ourPortfolioPosts = this.ourPortfolioPosts;
    this.router.navigate(['/admin/edit']);
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

}
