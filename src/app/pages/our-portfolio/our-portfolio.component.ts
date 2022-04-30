import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-our-portfolio',
  templateUrl: './our-portfolio.component.html',
  styleUrls: ['./our-portfolio.component.css']
})
export class OurPortfolioComponent implements OnInit {

  ourPortfolioPosts: string[];

  constructor(private adminService: AdminService) {
    this.readPortfolio()
   }

  ngOnInit(): void {
  }

  readPortfolio(){
    this.adminService.readOurPortfolio().subscribe(res=>{
      console.log(res)
      this.adminService.ourPortfolioPosts = res.posts
      this.ourPortfolioPosts = res.posts
    })
  }

  getLink(id: string){
    return  "https://www.youtube.com/embed/"+id+"?playlist="+id+"&loop=1"
   }
 
}
