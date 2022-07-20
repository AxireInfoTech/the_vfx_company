import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogData: {
    id: number;
    title: string;
    sortTitle: string;
    date: string;
    url: string;
  }[] = [
    {
      id: 1,
      title: 'Why is Motion Branding becoming so popular in Digital Marketing?',
      sortTitle: 'Hook your target audience.',
      date: '25 March 2022',
      url: 'HookYourTargetAudience',
    },
    {
      id: 2,
      title: 'How to use Motion Graphics to YOUR Brand’s advantage?',
      sortTitle: 'Motion graphics for brand’s advantage.',
      date: '25 May 2022',
      url: 'MotionGraphicsForBrandsAdvantage',
    },
    {
      id: 3,
      title:
        'What’s the most efficient solution for hooking your target audience?',
      sortTitle: 'Motion Branding is becoming so popular.',
      date: '29 June 2022',
      url: 'MotionBrandingIsBecomingSoPopular',
    },
  ];
  blogId: number;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      let blogURL = params['id'];
      this.blogId = this.blogData.find((value) => value.url === blogURL)?.id;
      if (!this.blogId) {
        this.router.navigate(['/blogs']);
      }
      console.log(this.blogId);
    });
  }

  ngOnInit(): void {}
}
