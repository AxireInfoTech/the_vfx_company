import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';
import { ApplicationPipesModule } from 'src/app/safe-pipe.module';


@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
    ApplicationPipesModule
  ],
  exports: [GalleryComponent]
})
export class GalleryModule { }
