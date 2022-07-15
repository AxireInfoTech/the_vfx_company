import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogData: any[] = [
    {
      id: 1,
      title: 'Why is Motion Branding becoming so popular in Digital Marketing?',
      sortTitle: 'Hook your target audience.',
      date: '25 March 2022',
    },
    {
      id: 2,
      title: 'How to use Motion Graphics to YOUR Brand’s advantage?',
      sortTitle: 'Motion graphics for brand’s advantage.',
      date: '25 May 2022',
    },
    {
      id: 3,
      title:
        'What’s the most efficient solution for hooking your target audience?',
      sortTitle: 'Motion Branding is becoming so popular.',
      date: '29 June 2022',
    },
  ];
  blogId: number;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.blogId = params['id'];
      console.log(this.blogId);
    });
  }

  ngOnInit(): void {}
}
