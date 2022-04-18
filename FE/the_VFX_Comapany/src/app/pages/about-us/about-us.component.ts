import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  list = [
    {title:'Priyank Dudakiya',position:'Founder',img:'../../../assets/img/team/priyank.jpg'},
    {title:'Kaushik Jain',position:'Co-founder',img:'../../../assets/img/team/kaushik.jpg'},
    {title:'Harshita Trilokani',position:'Content writing',img:'../../../assets/img/team/harshita.jpg'},
    {title:'Mayur Gohel',position:'Sales & marketing',img:'../../../assets/img/team/mayur.jpg'},
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
