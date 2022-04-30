import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-our-portfolio',
  templateUrl: './edit-our-portfolio.component.html',
  styleUrls: ['./edit-our-portfolio.component.css']
})
export class EditOurPortfolioComponent implements OnInit {

  ourPortfolioPosts: string[] = []

  constructor(private adminService: AdminService,private router : Router) { 
    this.ourPortfolioPosts = this.adminService.ourPortfolioPosts
  }

  ngOnInit(): void {
  }

  onAddNewPost(){
    this.ourPortfolioPosts.push("");
  }

  onDeletePost(i: number){
    this.ourPortfolioPosts.splice(i,1);
  }

  onEditOurPortfolio(){
    this.adminService.editOurPortfolio(this.ourPortfolioPosts)
    .subscribe(res=>{
      console.log(res);
      this.router.navigate(['/admin/panel']);
    },err=>{
      console.log(err)
    })
  }

}
