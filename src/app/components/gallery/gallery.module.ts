import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';
import { SafePipe } from 'src/app/safe.pipe';


@NgModule({
  declarations: [GalleryComponent, SafePipe],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule
  ],
  exports: [GalleryComponent]
})
export class GalleryModule { }
