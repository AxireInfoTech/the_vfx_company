import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { OurPortfolioComponent } from './pages/our-portfolio/our-portfolio.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { 
    path: 'home', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) 
  },
  {
    path:'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path:'our-portfolio',
    component: OurPortfolioComponent
  },

  {
    path:'T&C',
    component: TermsAndConditionsComponent
  },
  { 
    path: 'contactus', 
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  { 
    path: 'offerings', 
    loadChildren: () => import('./pages/offerings/offerings.module').then(m => m.OfferingsModule) 
  },
  { 
    path: 'our-work/:client',
    loadChildren: () => import('./pages/our-work/our-work.module').then(m => m.OurWorkModule) 
  },
  { 
    path: 'aboutus',
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule) 
  },
  { 
    path: 'blogs',
    loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule) 
  },

  { 
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) ,
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
