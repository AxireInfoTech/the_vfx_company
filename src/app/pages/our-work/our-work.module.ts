import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurWorkRoutingModule } from './our-work-routing.module';
import { OurWorkComponent } from './our-work.component';
import { GalleryModule } from 'src/app/components/gallery/gallery.module';


@NgModule({
  declarations: [
    OurWorkComponent
  ],
  imports: [
    CommonModule,
    OurWorkRoutingModule,
    GalleryModule
  ]
})
export class OurWorkModule { }
