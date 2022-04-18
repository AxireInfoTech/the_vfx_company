import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientsComponent } from './clients.component';



@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ClientsComponent]
})
export class ClientsModule { }
