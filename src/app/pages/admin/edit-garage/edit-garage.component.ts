import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { client } from 'src/app/services/admin.interface';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-garage',
  templateUrl: './edit-garage.component.html',
  styleUrls: ['./edit-garage.component.css']
})
export class EditGarageComponent implements OnInit {

  clientData: client = {
    id: '',
    name: '',
    review: '',
    img: '',
    posts: [],
    
  };


  constructor(private adminService: AdminService,private router : Router) { }

  ngOnInit(): void {
    if(this.adminService.admin_username == '' && this.adminService.admin_password == ''){
      this.router.navigate(['/admin/login']);
    }
    this.clientData = this.adminService.editClientData;
  }

  onEditGarage(){
    console.log(this.clientData)
    this.adminService.updateGarage(this.clientData)
    .subscribe(res=>{
      console.log(res);
      this.router.navigate(['/admin/panel']);
    },err=>{
      console.log(err)
    })

  }

  onAddNewPost(){
    this.clientData.posts.push("");
  }

  onDeletePost(i: number){
    this.clientData.posts.splice(i,1);
  }


}
