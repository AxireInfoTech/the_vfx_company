import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CreateGarageComponent } from './create-garage/create-garage.component';
import { EditGarageComponent } from './edit-garage/edit-garage.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditOurPortfolioComponent } from './edit-our-portfolio/edit-our-portfolio.component';


@NgModule({
  declarations: [
    AdminComponent,
    // AdminGaragesComponent,
    CreateGarageComponent,
    EditGarageComponent,
    AdminLoginComponent,
    AdminPanelComponent,
    EditOurPortfolioComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AdminModule { }
