import { Component, Input, OnInit } from '@angular/core';
import { ImgDataService } from 'src/app/services/img-data.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input('client')client: string = "";

  dataFlag = "all";
  constructor(
    private imgdataService: ImgDataService
  ) { }
  
  ngOnInit(): void {
    console.log(this.client)
    this.dataFlag = this.client;
  }

}
