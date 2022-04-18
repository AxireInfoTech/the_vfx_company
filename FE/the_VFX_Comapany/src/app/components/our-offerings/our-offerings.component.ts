import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'our-offerings',
  templateUrl: './our-offerings.component.html',
  styleUrls: ['./our-offerings.component.scss']
})
export class OurOfferingsComponent implements OnInit {
  list = [
    {
      title:'3D Product Visualization',
      img:'../../../assets/icons/offerings/3dproduct.png',
      desc:'Give a digital movement to your product and showcase it in unique way.'
    },
    {
      title:'Logo Animation',
      img:'../../../assets/icons/offerings/logo.png',
      desc:'Create a "dynamic identification of your brand".'
    },
    {
      title:'Motion Graphics',
      img:'../../../assets/icons/offerings/motion-graphic.png',
      desc:'Communicate with your audience by animation that will add depth to your brand.'
    },
    {
      title:'Poster Design',
      img:'../../../assets/icons/offerings/poster.png',
      desc:'Introduce your products and business in most creative ways with our designs of posters.'
    },
    {
      title:'App Devlopment',
      img:'../../../assets/icons/offerings/app-development.png',
      desc:'Connect fast, easy, secure with the use by developing your own business application.'
    },
    {
      title:'Web Devlopment',
      img:'../../../assets/icons/offerings/website.png',
      desc:'Become an industry standard, and bring awareness of your offerings. With your own website.'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
