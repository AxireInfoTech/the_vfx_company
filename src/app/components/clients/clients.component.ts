import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { client } from 'src/app/services/admin.interface';
import { AdminService } from 'src/app/services/admin.service';
import { ImgDataService } from 'src/app/services/img-data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clientData: client[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    items: 3,

    nav: true,
    autoplay: true,
    autoplaySpeed: 6000,
    navText: [
      "<img style='width: 50px' src='../../../assets/icons/slider-left.png' alt=''>",
      "<img style='width: 50px' src='../../../assets/icons/slider-right.png' alt=''>",
    ],
  };

  constructor(
    private router: Router,
    private imgDataService: ImgDataService,
    private adminService: AdminService
  ) {
    this.adminService.readGarages().subscribe((res) => {
      // console.log(res)
      this.adminService.clientData = [];
      for (const item in res) {
        this.adminService.clientData.push({
          id: item,
          name: res[item].name,
          review: res[item].review,
          img: res[item].img,
          posts: res[item].posts,
        });
      }
      this.clientData = this.adminService.clientData;

      // this.clientData = res.body;
      // this.adminService.clientData = res.body;
    });
  }

  ngOnInit(): void {}

  redirectToGallery(client: string) {
    this.imgDataService.setData(client);
    this.router.navigate(['/our-work']);
  }

  getUrl(img: string) {
    return 'https://thevfxcompany.in/assets/clients/' + img + '.png';
  }
}
