import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(arg:any){
    this.showMenu = arg;
  }

}
