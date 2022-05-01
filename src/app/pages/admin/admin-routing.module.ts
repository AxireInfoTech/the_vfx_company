import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CreateGarageComponent } from './create-garage/create-garage.component';
import { EditGarageComponent } from './edit-garage/edit-garage.component';
import { EditOurPortfolioComponent } from './edit-our-portfolio/edit-our-portfolio.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AdminLoginComponent },
  { path: 'panel', component: AdminPanelComponent,     canActivate: [AuthGuard]
},
  { path: 'create', component: CreateGarageComponent, canActivate: [AuthGuard] },
  { path: 'edit', component: EditGarageComponent, canActivate: [AuthGuard] },
  { path: 'edit-ourportfolio', component: EditOurPortfolioComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
