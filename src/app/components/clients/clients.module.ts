import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [ClientsComponent],
  imports: [CommonModule, RouterModule, CarouselModule],
  exports: [ClientsComponent],
})
export class ClientsModule {}
