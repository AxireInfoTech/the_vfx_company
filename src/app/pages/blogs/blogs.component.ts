import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  instagrmaData: any[] = [];
  instagramImages: any[] = [];
  instagramUrl: string =
    'https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,timestamp,permalink&access_token=IGQVJYc3ktc19uR3hBdm1YSXJCZAmJZANWNoWVJ6VEhDZA3Rad0lJMERiUUo5ZATZAnSWRfNWFVcmZA0ckNzWnFCYnlLZA2kzWmtSM1RMcW9maDhoMkJVbGNFODFnQ2VNajZAkbTZAhcmt4S3RR';

  constructor(private httpclient: HttpClient) {}

  ngOnInit(): void {
    this.httpclient.get<any>(this.instagramUrl).subscribe((res) => {
      if (res.data) {
        this.instagrmaData = res.data;
        this.instagramImages = this.instagrmaData
          .filter((value) => value?.media_type === 'IMAGE')
          .slice(0, 4);
      }
    });
  }
}
