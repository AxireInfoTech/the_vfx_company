import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule
  ],
  exports: [GalleryComponent]
})
export class GalleryModule { }
