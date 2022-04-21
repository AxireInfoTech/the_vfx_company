import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurOfferingsComponent } from './our-offerings.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [OurOfferingsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [OurOfferingsComponent]
})
export class OurOfferingsModule { }
