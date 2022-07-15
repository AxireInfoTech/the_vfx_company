import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { SecurityContext } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownPipe } from 'src/app/markdown.pipe';
import { Blog1Component } from './content/blog1/blog1.component';
import { Blog2Component } from './content/blog2/blog2.component';
import { Blog3Component } from './content/blog3/blog3.component';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: ':id', component: BlogComponent },
];

@NgModule({
  declarations: [BlogsComponent, BlogComponent, MarkdownPipe, Blog1Component, Blog2Component, Blog3Component],
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
})
export class BlogsModule {}
