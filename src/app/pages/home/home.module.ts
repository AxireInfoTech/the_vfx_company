import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { CarouselModule } from 'src/app/components/carousel/carousel.module';
import { ClientsModule } from 'src/app/components/clients/clients.module';
import { CardsModule } from 'src/app/components/cards/cards.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
    CarouselModule,
    ClientsModule,
    CardsModule,
    FooterModule
  ]
})
export class HomeModule { }
