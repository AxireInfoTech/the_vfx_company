import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { client } from 'src/app/services/admin.interface';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-create-garage',
  templateUrl: './create-garage.component.html',
  styleUrls: ['./create-garage.component.css']
})
export class CreateGarageComponent implements OnInit {

  clientData: client = {
    id: '',
    name: '',
    img: '',
    posts: ['CNjlbNia9Oc'],
  };
  link: SafeResourceUrl = 'https://www.youtube.com/embed/M9oR5xUzZBQ?playlist=M9oR5xUzZBQ&loop=1'

  // garageData: garage;

  constructor(private adminService: AdminService,private router : Router,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // console.log({...this.garageData})
    if(this.adminService.admin_username == '' && this.adminService.admin_password == ''){
      this.router.navigate(['/admin/login']);
    }
  }
  getlink(){
    return this.link
  }

  onCreateClient(){
    this.adminService.createClient(this.clientData)
    .subscribe(res=>{
      console.log(res)

      if(res.name){
        this.router.navigate(['/admin/panel']);
        // this.adminService.createGarageData = this.adminService.emptyGarageData;
      }

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
