import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SendEmailComponent } from 'src/app/components/send-email/send-email.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { SendEmailModule } from 'src/app/components/send-email/send-email.module';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,ReactiveFormsModule,
    NavbarModule,
    SendEmailModule,
    FooterModule
  ]
})
export class ContactModule { }
