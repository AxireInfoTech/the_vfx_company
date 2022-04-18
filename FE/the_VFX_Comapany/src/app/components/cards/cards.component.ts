import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  list = [
    {title:'3D Product Visualization',img:'../../../assets/img/cards/3d.png'},
    {title:'Logo Animation',img:'../../../assets/img/cards/Logo.png'},
    {title:'Motion Graphics',img:'../../../assets/img/cards/Motion.png'},
    {title:'Poster Design',img:'../../../assets/img/cards/Brochure.png'},
    {title:'App Devlopment',img:'../../../assets/img/cards/App.png'},
    {title:'Web Devlopment',img:'../../../assets/img/cards/Web.png'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
