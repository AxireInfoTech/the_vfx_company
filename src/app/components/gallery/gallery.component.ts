import { Component, Input, OnInit } from '@angular/core';
import { ImgDataService } from 'src/app/services/img-data.service';
import { client } from '../../services/admin.interface';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input('client')client: string = "";
  clientData: client[]
  posts: string[];
  dataFlag = "all";
  constructor(
    private imgdataService: ImgDataService,
    private adminService: AdminService
  ) {
    this.adminService.readGarages().subscribe(res=>{
      // console.log(res)
      this.adminService.clientData = []
      for(const item in res){
        this.adminService.clientData.push({id: item, name: res[item].name, img: res[item].img, posts: res[item].posts})
      }
      this.clientData = this.adminService.clientData;
      console.log(this.client)
      console.log(this.adminService.clientData)
      this.dataFlag = this.client;
      this.clientData = this.adminService.clientData;
      this.clientData.forEach(v=>{
        console.log(v.name)

        if(v.name == this.client){
          this.posts = v.posts;
        }
      })
      console.log(this.posts)
      // this.clientData = res.body;
      // this.adminService.clientData = res.body;
    })

   }
  
  ngOnInit(): void {
    
  }

  getLink(id: string){
   return  "https://www.youtube.com/embed/"+id+"?playlist="+id+"&loop=1"
  }

}
