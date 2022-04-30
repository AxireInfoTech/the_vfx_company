import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-our-portfolio',
  templateUrl: './edit-our-portfolio.component.html',
  styleUrls: ['./edit-our-portfolio.component.css']
})
export class EditOurPortfolioComponent implements OnInit {

  ourPortfolioPosts: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewPost(){
    this.ourPortfolioPosts.push("");
  }

  onDeletePost(i: number){
    this.ourPortfolioPosts.splice(i,1);
  }

  onEditOurPortfolio(){
    
  }

}
