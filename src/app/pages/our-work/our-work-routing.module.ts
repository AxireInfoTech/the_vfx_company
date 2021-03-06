import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurWorkComponent } from './our-work.component';

const routes: Routes = [{ path: '', component: OurWorkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurWorkRoutingModule { }
