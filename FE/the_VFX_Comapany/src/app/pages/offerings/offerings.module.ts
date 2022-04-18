import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferingsRoutingModule } from './offerings-routing.module';
import { OfferingsComponent } from './offerings.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { OurOfferingsModule } from 'src/app/components/our-offerings/our-offerings.module';


@NgModule({
  declarations: [
    OfferingsComponent
  ],
  imports: [
    CommonModule,
    OfferingsRoutingModule,
    NavbarModule,
    FooterModule,
    OurOfferingsModule
  ]
})
export class OfferingsModule { }
