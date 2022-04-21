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

  story: string = "Started as a learner and an observer of the existing advertising techniques; today, we've been able to make a good number of customers satisfied with our unique approach to advertising. We're gaining more and more experience everyday, and so are we refining our skills better and better everyday."

  mission: string = "We aim to convert the present static traditional advertising into dynamic advertisement at a large scale, creatively making an impact for the digital India campaign. We strive to utilise all the digital tools available for the same, providing utmost satisfaction to the customer on the way. We believe in staying one step ahead of our customers' expectations, surprising them with the quality is our favourite part."
  
  vision: string = "We envision boarding more and more startups on our digital advertising platform, bringing our customers' target audience in touch with them, helping their digital presence. Picturising a community of satisfied customers and insanely growing reach to the target audience is what keeps us on our toes. The more we imagine, the smarter we work."
  
  content = this.story;

  constructor() { }

  ngOnInit(): void {
  }

  onAboutUsChange(s: string){
    if(s == "mission"){
      this.content = this.mission
    }else if(s == "vision"){
      this.content = this.vision
    }else if(s == "story"){
      this.content = this.story
    }
  }

}
