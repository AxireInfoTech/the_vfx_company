import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImgDataService } from 'src/app/services/img-data.service';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slideIndex = 0;
  interval:any;
  constructor(
    private router: Router,
    private imgDataService: ImgDataService
  ) { }

  ngOnInit(): void {
    this.interval = setInterval(()=>{
      this.autoChangeSlide();
    },2000);
  }

  changeIndex(arg:any){
    this.slideIndex = arg;
  }

  autoChangeSlide(){
    this.slideIndex = this.slideIndex+1;
    // console.log(this.slideIndex);
    if(this.slideIndex>3){
      this.slideIndex = 0;
    }
  }

  redirectToGallery(client: string){
    this.imgDataService.setData(client);
    this.router.navigate(['/our-work']);
  }

}
