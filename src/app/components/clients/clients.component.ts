import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { client } from 'src/app/services/admin.interface';
import { AdminService } from 'src/app/services/admin.service';
import { ImgDataService } from 'src/app/services/img-data.service';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientData: client[];


  constructor(
    private router: Router,
    private imgDataService: ImgDataService,
    private adminService: AdminService
  ) {
    this.adminService.readGarages().subscribe(res=>{
      // console.log(res)
      this.adminService.clientData = []
      for(const item in res){
        this.adminService.clientData.push({id: item, name: res[item].name, img: res[item].img, posts: res[item].posts})
      }
      this.clientData = this.adminService.clientData;

      // this.clientData = res.body;
      // this.adminService.clientData = res.body;
    })
   }

  ngOnInit(): void {
  }

  redirectToGallery(client: string){
    this.imgDataService.setData(client);
    this.router.navigate(['/our-work']);
  }

  getUrl(img: string){
    return "https://thevfxcompany.in/clients/"+img+".png"
  }

}
