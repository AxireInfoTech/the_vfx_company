import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendEmailComponent } from './send-email.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SendEmailComponent],
  imports: [
    CommonModule,
    RouterModule,
     FormsModule
  ],
  exports: [SendEmailComponent]
})
export class SendEmailModule { }
