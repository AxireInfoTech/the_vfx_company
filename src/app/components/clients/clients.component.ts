import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImgDataService } from 'src/app/services/img-data.service';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(
    private router: Router,
    private imgDataService: ImgDataService
  ) { }

  ngOnInit(): void {
  }

  redirectToGallery(client: string){
    this.imgDataService.setData(client);
    this.router.navigate(['/our-work']);
  }

}
